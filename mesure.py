import urllib.request
from time import sleep
from bs4 import BeautifulSoup
import MeCab
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer

def url2text(urls):
    article = []
    for url in urls:
        print(url+"のデータを取得しています")
        html = urllib.request.urlopen(url)
        soup = BeautifulSoup(html,"html.parser")
        soup_article = soup.find("div", class_="mw-parser-output")#Wikipediaの文書部分を抽出
        soup_article= soup_article.get_text()#タグの削除
        article.append(soup_article)
        sleep(3)  #マナーとして3秒間隔以上あける
    return article


