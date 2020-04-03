from flask import Flask, render_template, request
from chatterbot import ChatBot
import nltk.corpus
from chatterbot.trainers import ChatterBotCorpusTrainer
from chatterbot.trainers import ListTrainer
from pymongo import MongoClient

app = Flask(__name__)

bot = ChatBot(
    'TiPi',
    #storage_adapter="chatterbot.storage.MongoDatabaseAdapter",
    #database="tipi_db",
    #database_uri="mongodb://localhost/tipi_db",
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

if __name__ == "__main__":
    app.run()
