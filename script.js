let posts = [{
        'author': 'Christa',
        'image': 'pix/tree.jpg',
        'profill': 'pix/1 (1).jpg',
        'description': 'Wunderschöner Tag in der Natur',
        'location': 'Vogelwald Südstadt',
        'tools': 'pix/heart.png',
        'tools2': 'pix/comment.png',
        'tools3': 'pix/send.png',
        'tools4': 'pix/save-instagram.png',
        'likes': 'Gefällt 322 Personen',
        'commentuser': 'Hannis :',
        'comment': 'Das sieht so schön aus ..wow !',
        'commentuser1': 'Reiner:',
        'comment1': 'Fast wie bei mir im garten :D',
        'hashtags': '#natur #abschalten #nofilter ',
        'newComments': [],
    },
    {
        'author': 'Levi',
        'image': 'pix/disko.jpg',
        'profill': 'pix/1 (2).jpg',
        'description': 'Endlich Wochenende!',
        'location': 'Technoclub 12 ',
        'tools': 'pix/heart.png',
        'tools2': 'pix/comment.png',
        'tools3': 'pix/send.png',
        'tools4': 'pix/save-instagram.png',
        'likes': 'Gefällt 1.256 Personen',
        'commentuser': 'Berthold :',
        'comment': 'Krass du warst auch da??',
        'commentuser1': 'Ymir:',
        'comment1': ' Suchti :))',
        'hashtags': '#club #weekend #onlytonight #techno',
        'newComments': [],
    },
    {
        'author': 'Hanji',
        'image': 'pix/food.jpg',
        'profill': 'pix/hijab-g1c08d4683_640.jpg',
        'description': 'Ich liebe einfach Indisches Essen..',
        'location': 'Mumbai Restaurant Steinhafen',
        'tools': 'pix/heart.png',
        'tools2': 'pix/comment.png',
        'tools3': 'pix/send.png',
        'tools4': 'pix/save-instagram.png',
        'likes': 'Gefällt 896 Personen',
        'commentuser': 'Carla :',
        'comment': 'heftig lecker ...gönn dir ;)',
        'commentuser1': 'Grisha:',
        'comment1': 'echt nicht meins xD',
        'hashtags': '#scharf #gewürze #indien #naan #biryani',
        'newComments': [],
    },
    {
        'author': 'Eren',
        'image': 'pix/comper.jpg',
        'profill': 'pix/1 (5).jpg',
        'description': 'Projekt noch nicht gestartet,aber hauptsache der Arbeitsplatz sieht schick aus',
        'location': 'At Home',
        'tools': 'pix/heart.png',
        'tools2': 'pix/comment.png',
        'tools3': 'pix/send.png',
        'tools4': 'pix/save-instagram.png',
        'likes': 'Gefällt 927 Personen',
        'commentuser': 'Marco:',
        'comment': ' Ich hab auch noch nicht angefangen haha',
        'hashtags': '#faul #motivationslos #deskdisplay #coffee # multimedia #homeoffice',
        'commentuser1': 'Zeke:',
        'comment1': ' Dein Ernst? Diese Woche ist abgabe!',
        'newComments': [],

    },
];

// show Posts
function show(params) {
    document.getElementById('postcontainer').innerHTML += '';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        document.getElementById('postcontainer').innerHTML += `
        <div class="postzbox">
            <div class="position">
              <img class="miniatur" src="${post['profill']}">
                <div>
                  <div class="author">${post['author']}</div>
                   <div class="location">${post['location']}</div>
               </div>
           </div>
            <img class="img" src="${post['image']}">
            <div class="post-nav">
                   <div class=" post-nav-icons-left">
                       <img class="icons" src="${post['tools']}">
                       <img class="icons" src="${post['tools2']}">
                       <img class="icons" src="${post['tools3']}">
                   </div>
                   <div class=" post-nav-icons-right">
                   <img class="icons" src="${post['tools4']}">
               </div>
            </div>
            <div class="likes"><b>${post['likes']}</b></div>
            <div class="tags">
               <div class="description">${post['description']}</div>
               <div class="hash">${post['hashtags']}</div>
            </div>
            <div class="comm">
                <div class="commentuser"><b>${post['commentuser']}</b></div>
                <div class="comment">${post['comment']}</div>
            </div>
            <div class="comm">
               <div class="commentuser"><b>${post['commentuser1']}</b></div>
               <div class="comment">${post['comment1']}</div>   
             </div>
             <div class="comm">
               <div class="commentuser"><b></b></div>
               <div class="comment" id="myposts${i}"></div>   
             </div>
             <div class="post-comment-input-container"> 
            <img class="smile" src="pix/lacheln.png">
            <input type="text" placeholder=" Kommentieren..." id="message${i}" class="post-comment-input">
            <button class="btns" type="submit" onclick="addPost(${i})">Post</button>
            </div>
        </div>
        `;
    }
}
// Kommentierfunktion
function addPost(j) {
    let text = document.getElementById('message' + j).value
    posts[j]['newComments'].push(text);
    let myposts = document.getElementById('myposts' + j);
    myposts.innerHTML = '';
    for (let i = 0; i < posts[j]['newComments'].length; i++) {
        myposts.innerHTML += `
        <div class="comment1" id="comment + ${i}"><b>Feros:</b> ${posts[j]['newComments'][i]}</div>
        `;
    }
    text = document.getElementById('message' + j).value = '';
}