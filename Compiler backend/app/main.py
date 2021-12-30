from fastapi import FastAPI
from pydantic import BaseModel
from Compylex.compylex.compiler import Compile
import json


class Item(BaseModel):
    code: str
    lang: str
    input: str
    id: str


app = FastAPI()


@app.post("/compile/")
async def create_item(item: Item):
    result = Compile(item.code, item.lang, item.input, item.id)
    output = result.get_output()
    status = result.get_status()
    data = {
        'output': output,
        'status': status
    }
    data = json.dumps(data)
    return data
