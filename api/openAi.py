from fastapi import APIRouter
from fastapi import FastAPI
import openai

app = FastAPI()
router = APIRouter()

# Setzen Sie Ihren API-Schlüssel von OpenAI
openai.api_key = 'sk-proj-EH0L8kstN9peQFsYKaZ5T3BlbkFJaFXhBNY3d0fwuz1BNCiJ'

# Beispiel-Endpunkt zum Generieren von Text
@app.get("/generate-text/")
def generate_text():
    prompt = "Once upon a time"
    response = openai.Completion.create(
      engine="text-davinci-002",
      prompt=prompt,
      max_tokens=50
    )
    return {"generated_text": response.choices[0].text.strip()}
