from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
from chatterbot.trainers import ListTrainer
from pymongo import MongoClient


app = Flask(__name__)

bot = ChatBot(
    'TiPi',
    #storage_adapter="chatterbot.storage.MongoDatabaseAdapter",
    #database="TiPi",
    #database_uri="http://192.168.1.70:28017/",
    logic_adapters=[
        'chatterbot.logic.BestMatch'
    ])

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

