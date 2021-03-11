# Image-Size-Checker
Small Node.JS Script to help sort files by their size. This will be used to detect images over 100KB and sort them into appropriate folders for compression if needed.

## How do I get this working on my machine?
Firstly, you'll need to clone down this directory, which you can do by running:

```bash
git clone https://github.com/luke-coleman/imageSizeChecker
```
You'll need to have Node.JS installed on your machine, which you can download from [this link](https://nodejs.org/en/download/). Make sure you have this installed, otherwise nothing will work. 

Then you'll need to navigate to where ever you've cloned this file to, this can be done with the following:

```bash
cd /Documents/Git/imageSizeChecker
```

After, you can then run:
```bash
node index.js
```

## To then use this:
You'll need to drag all images you want to check into the "uncompressed" folder. You can then run:
```bash
node index.js
```
Any files under 100KB will be placed into the lessThan100 directory and anything over will go into the toCompress directory. 
