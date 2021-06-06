---
title: Songkick Spotify Playlist Generator
tagline: Web application to generate Spotify Playlists out of Songkick upcoming gig artists
link: https://songkick.benbristow.co.uk/
---

I love to go to gigs. Too many in-fact! And I wanted a way to make a playlist out of the gigs I’m going to to get ‘warmed up’. I use the great free service provided by Songkick to track the gigs I’m going to.

To make this easier for myself, I created a web application which integrates with both Spotify’s and Songkick’s APIs to extract a list of upcoming headliners and support artists from my public Songkick account and then add the artist’s top tracks to a shuffled Spotify playlist.

I originally wrote the application in Ruby/Sinatra, but have recently rewritten it to run on Azure using C#/Functions for the backend and React on Azure Blob Storage Static Hosting w/ CDN.