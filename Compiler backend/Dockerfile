FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY ./app /code/app

EXPOSE 5000

CMD ["uvicorn", "app.main:app","0.0.0.0", "--port", "5000"]
