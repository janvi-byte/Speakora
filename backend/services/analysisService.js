const AI_SERVICE_URL =
  process.env.AI_SERVICE_URL || 'http://localhost:8001';

export async function analyzeSpeakingSession(
  session,
  preferredLanguage = 'English'
) {
  if (!session?.transcript?.trim()) {
    return {
      status: 'pending',
      message: 'No transcript is available for analysis.',
    };
  }

  try {
    const response = await fetch(`${AI_SERVICE_URL}/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        transcript: session.transcript,
        duration_seconds: session.durationSeconds || 0,
        preferred_language: preferredLanguage,
      }),
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(
        payload?.detail ||
          payload?.message ||
          'AI analysis failed.'
      );
    }

    if (payload.contextual_coaching_available === false) {
      throw new Error(
        payload.contextual_coaching_error ||
          'AI rewriting is unavailable. Please try again.'
      );
    }

    if (typeof payload.improved_answer !== 'string' || !payload.improved_answer.trim()) {
      throw new Error('AI did not return an improved answer. Please try again.');
    }

    const vocabularyUpgrades = Array.isArray(
      payload.vocabulary_upgrades
    )
      ? payload.vocabulary_upgrades.map((upgrade) => ({
          usedWord: upgrade.used_word,
          suggestedWord: upgrade.suggested_word,
          meaning: upgrade.meaning,
          preferredLanguage: upgrade.preferred_language,
          translation: upgrade.translation,
          reason: upgrade.reason,
          examples: Array.isArray(upgrade.examples)
            ? upgrade.examples
            : [],
        }))
      : [];

    return {
      status: 'complete',
      ...payload,
      vocabulary_upgrades: vocabularyUpgrades,
    };
  } catch (error) {
    console.error('AI analysis error:', error);

    return {
      status: 'pending',
      message:
        error.message ||
        'AI analysis service is unavailable.',
    };
  }
}
