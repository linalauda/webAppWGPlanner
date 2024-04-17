import openai

# Setzen Sie Ihren API-Schlüssel
openai.api_key = 'admin123'

# Beispielcode zum Generieren von Text mit OpenAI
response = openai.Completion.create(
    engine="text-davinci-002",
    prompt="Once upon a time",
    max_tokens=50
)

# Drucken Sie die generierte Antwort
print(response.choices[0].text.strip())
