

console.log('This is separate js file');

// option 2-------

function makeColor(){
    document.body.style.backgroundColor = 'steelblue';
}

// option 3 -----------
const makeBlue = document.getElementById('make-blue');
        makeBlue.onclick = makeblue;

        function makeblue(){
            document.body.style.backgroundColor = 'blue';
        }

        // option -4 ----------

        const purpleButton = document.getElementById('make-purple');
        purpleButton.onclick = function makePurple(){
            document.body.style.backgroundColor = 'purple';
        }

        // option ----4 -------
        const pinkButton = document.getElementById('make-pink');
        pinkButton.addEventListener('click', makePink);

        function makePink(){
            document.body.style.backgroundColor = 'pink';
        }

        // option - 5 ---------------------
        const makeRed = document.getElementById('make-red');
       makeRed.addEventListener('click', function make(){
        document.body.style.backgroundColor = 'red';
       })

    //    final option ---------
    document.getElementById('golden-rod').addEventListener('click', function(){
        document.body.style.backgroundColor = 'goldenrod'
       })

       
