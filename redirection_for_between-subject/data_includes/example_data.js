var shuffleSequence = seq("debrief");
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        hasCorrect: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];
var links = [
  { url: "http://spellout.net/ibexexps/utkuturk/HammerlyRep_gb/experiment.html", weight: 1 }, 
  // we can arrange weights if we have too many participants, 
  { url: "http://spellout.net/ibexexps/utkuturk/HammerlyRep_gb/experiment.html", weight: 1 }  
];

function weightedRandom(arr)
{
  var weightSum = arr.map(l => l.weight).reduce((a, b) => a + b, 0);
  var rand = Math.random() * weightSum;
  
  var accumulated = 0;
  for (var i = 0; i < arr.length; i++)
  {
    if (rand < accumulated + arr[i].weight)
    {
      return arr[i];
    }
    
    accumulated += arr[i].weight;
  }
}

function openSite() {
  var link = weightedRandom(links);
  var win = window.open(link.url, '_self');
  win.focus();
}


var items = [

    ["sep", "Separator", { }],

    ["debrief", "Form", {
        javascript: openSite(),
    } ]

];