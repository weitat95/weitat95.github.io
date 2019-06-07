#!/bin/bash --login

#trap "rvm default && echo ruby to default" INT
rvm use 2.1.10
bundle exec jekyll serve
