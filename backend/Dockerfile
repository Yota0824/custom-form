FROM python:3.11-slim

ENV PYTHONUMBUFFERED=1

WORKDIR /code

COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . .