FROM python:3.9-slim

COPY . /app/

WORKDIR /app/

RUN pip install uvicorn

ENTRYPOINT ["uvicorn"]
CMD ["Server:app --host 0.0.0.0 --port 8000 --reload"]
