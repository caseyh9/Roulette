from tweets import get_tweets

for tweet in get_tweets('elonmusk'):
    print(tweet['time'])
