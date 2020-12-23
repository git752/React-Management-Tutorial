const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/api/customers', (req, res) => {
    res.send(
        [
          {
            'id' : 1,
            'image' : 'https://placeimg.com/64/64/any/1',
            'name' : '홍길동222',
            'birthday' : '919119',
            'gender' : '남자',
            'job' : '대학생'
          },
          {
            'id' : 2,
            'image' : 'https://placeimg.com/64/64/any/2',
            'name' : '훙길둥',
            'birthday' : '313141',
            'gender' : '남자',
            'job' : '대학생'
          }
        ]
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));