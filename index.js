const CopyText = document.getElementById('textArea');
const MoveText = document.getElementById('finalArea');
const CopyBtn = document.getElementById('copyBtn');
const MoveBtn = document.getElementById('moveBtn');
const OutputArea = document.getElementById('output');
const ClearBtn = document.getElementById('clearBtn');


const Mtext = MoveBtn.addEventListener('click', function () {
const CopeidText = CopyText.value;
MoveText.value = CopeidText; 
 });
 
 const Ctext = CopyBtn.addEventListener('click', function () {
     const outputArea = document.createElement('textarea');
     document.body.appendChild(outputArea);
     outputArea.value = CopyText.value;
     outputArea.select();
     document.execCommand('copy');
     document.body.removeChild(outputArea);
     OutputArea.innerHTML = "<h2>  Copied Succesfully !  </h2>" + outputArea.value + "<br>" + "<br>" + "<button id = removeText> Click Here To Remove </button";  
     const Remove =  document.getElementById('removeText');
     Remove.addEventListener("click", function () {
         OutputArea.innerText = "  ";
     })

 })
 const ClearAll = ClearBtn.addEventListener('click', function () {
             const Clear = "";
             CopyText.value = Clear;
             MoveText.value = Clear;
             OutputArea.value = Clear;
         })

 