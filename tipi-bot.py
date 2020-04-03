from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
from chatterbot.trainers import ListTrainer
from pymongo import MongoClient
import nltk

app = Flask(__name__)

bot = ChatBot(
    'TiPi',
    storage_adapter="chatterbot.storage.MongoDatabaseAdapter",
    database="tipi_db",
    database_uri="mongodb://localhost/tipi_db",
    logic_adapters=[
        'chatterbot.logic.BestMatch'
    ],
    filters=[
        'chatterbot.filters.RepetitiveResponseFilter'
    ]
)

training = ChatterBotCorpusTrainer(bot)
training.train(
    "chatterbot.corpus.english"
)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    return str(bot.get_response(userText))


import requests


def count_words_at_url(url):
    resp = requests.get(url)
    return len(resp.text.split())


from rq import Queue
from worker import conn

q = Queue(connection=conn)

import utils

result = q.enqueue(count_words_at_url, 'http://heroku.com')

if __name__ == "__main__":
    app.run()
