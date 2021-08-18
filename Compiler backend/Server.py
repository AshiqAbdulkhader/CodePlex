from fastapi import FastAPI
from pydantic import BaseModel
from compylex.compiler import Compile
import json
import ray
from ray import serve


class Item(BaseModel):
    code: str
    lang: str
    input: str
    id: int


app = FastAPI()


@app.post("/compile/")
async def create_item(item: Item):
    result = Compile(item.code, item.lang, item.input, item.id)
    output = result.get_output()
    data = {
        'output': output,
        'status': result.get_status()
    }
    data = json.dumps(data)
    return data
