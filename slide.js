let button = document.getElementById('buton');
let result = document.getElementById('result')
let i=0;
let phrase = [
    'Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa',
'When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt',
'Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead',
"Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson",
'The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt',
'Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin',
'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. -Helen Keller',
'It is during our darkest moments that we must focus to see the light. -Aristotle',
'Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead',
'Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson',
'"It is during our darkest moments that we must focus to see the light." -Aristotle',
'"The purpose of our lives is to be happy." -Dalai Lama',
'"The only impossible journey is the one you never begin." -Tony Robbins',
'Life is a long lesson in humility. -James M. Barrie'
]
button.addEventListener('click', function(){
    let random = phrase[Math.floor(Math.random()* phrase.length)]
    result.innerHTML = random;
    document.getElementById('text').style.fontSize = '24px';
})