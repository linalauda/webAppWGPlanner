from fastapi import APIRouter
from fastapi import FastAPI
from openai import OpenAI
import openai

app = FastAPI()
router = APIRouter()

Authorization: Bearer OPENAI_API_KEY
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "OpenAI-Organization: YOUR_ORG_ID" \
  -H "OpenAI-Project: $PROJECT_ID"


client = OpenAI(
  organization='YOUR_ORG_ID',
  project='$PROJECT_ID',
)

curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $sk-proj-EH0L8kstN9peQFsYKaZ5T3BlbkFJaFXhBNY3d0fwuz1BNCiJ" \
  -d '{
     "model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": "Say this is a test!"}],
     "temperature": 0.7
   }'

{
    "id": "chatcmpl-abc123",
    "object": "chat.completion",
    "created": 1677858242,
    "model": "gpt-3.5-turbo-0613",
    "usage": {
        "prompt_tokens": 13,
        "completion_tokens": 7,
        "total_tokens": 20
    },
    "choices": [
        {
            "message": {
                "role": "assistant",
                "content": "\n\nThis is a test!"
            },
            "logprobs": null,
            "finish_reason": "stop",
            "index": 0
        }
    ]
}

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
