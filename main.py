from fastapi import FastAPI

# Erstellen einer Instanz der FastAPI-Klasse
app = FastAPI()

# Definieren einer Route und der dazugehörigen Funktion
@app.get("/v1/LISTE/{name}")
def read_root(name: str):
    return {"message": name}
