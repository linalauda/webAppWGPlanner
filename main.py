from enum import Enum

from fastapi import FastAPI
import openai

class ModelName(str, Enum):
    alexnet = "alexnet"
    resnet = "resnet"
    lenet = "lenet"


app = FastAPI()
openai.api_key = 'admin123'


@app.get("/generate-text")
async def generate_text():
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt="Once upon a time",
        max_tokens=50
    )
    return {"text": response.choices[0].text.strip()}


@app.get("/models/{model_name}")
async def get_model(model_name: ModelName):
    if model_name is ModelName.alexnet:
        return {"model_name": model_name, "message": "Deep Learning FTW!"}

    if model_name.value == "lenet":
        return {"model_name": model_name, "message": "LeCNN all the images"}

    return {"model_name": model_name, "message": "Have some residuals"}