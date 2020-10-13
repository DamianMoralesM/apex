const fs = require('fs');
const $ = require('cheerio');
const axios = require('axios');

const url = 'https://www.naranja.com/comercios-amigos';

axios.get(url).then(response => {

    const faq = [];
    // get questions
    const questions = [];
    const questionsTag = $('.faq-title_question', response.data).toArray();
    questionsTag.forEach((q) => {
        questions.push($(q).text());
    })

    // get answers
    const answers = [];
    const answersTag = $('.faq-text', response.data).toArray();
    answersTag.forEach((a) => {
        answers.push($(a).text());
    })

    // prepare json
    for (let i = 0; i < questions.length; i++) {
        faq.push({
            question: questions[i],
            anwser: answers[i]
        })
    }

    console.log(faq.length)
    console.log(faq)

    let data = JSON.stringify({
        data: faq,
        lastEdit: Date()
    });
    fs.writeFileSync('../client/my-app/src/assets/faq.json', data); // TODO: This could be placed in a S3 Bucket or another cloud service
    
}).catch(err => {
    console.log(err);
});