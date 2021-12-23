
// ================= check_all ==============

function insert_data(members[], childs[])
{
  let obj = {
    grand_parents: {lun: members[0], lautre: members[1]},
    parents: {lun: members[2], lautre: members[3]},
    enfants: {}
  }
  //les enfants commencent a 1 pour des raisons pratiques
  // var x;
  // x = 1;
  //
  // while (childs[x])
  // {
  //   enfants.
  // }
}

function check_all(opt)
{
  let members = [4];
  let childs = [];
  var currentSurname;
  var currentName;
  var currentDate;
  var currentPresentl;
  var currentPresenta;
  var currentPresentm;
  var currentDead;
  var surname = ['asurname', 'bsurname', 'xsurname', 'ysurname'];
  var name = ['aname', 'bname', 'xname', 'yname'];
  var date = ['adate', 'bdate', 'xdate', 'ydate'];
  var dead = ['adead', 'bdead', 'xdead', 'ydead'];
  var present = [
                  ['aall', 'amorning', 'aafter'],
                  ['ball', 'bmorning', 'bafter'],
                  ['xall', 'xmorning', 'xafter'],
                  ['yall', 'ymorning', 'yafter']
                ];

  var x = 0
  var currentDiv = document.getElementById('check');
  var newButton = document.createElement("button");
  var newBr = document.createElement("br");

  //boucle pour les 4 forms de base
  while (x < 4)
  {
    //get identiy
    currentSurname = document.getElementById(surname[x]).value;
    currentName = document.getElementById(name[x]).value;
    currentDate = document.getElementById(date[x]).value;
    //check if all identity is complete
    if (currentName && currentSurname && currentDate)
    {
      members[x] = {
        surname: currentSurname,
        name: currentName,
        born: currentDate
      };
      //get presence
      currentPresentl = document.getElementById(present[x][0]);
      currentPresentm = document.getElementById(present[x][1]);
      currentPresenta = document.getElementById(present[x][2]);
      if (currentPresentl.checked == true || (currentPresenta.checked == true && currentPresentm.checked == true))
        members[x].present = "all";
      else if (currentPresenta.checked == true)
        members[x].present = "after";
      else if (currentPresentm.checked == true)
        members[x].present = "morning";
    }
    //get date of dead if exist
    currentDead = document.getElementById(dead[x]);
    if (currentDead)
    //add date forms if necessary
      members[x].dead = document.getElementById(dead[x]).value;
    console.log(members[x]);
    x++;
  }
  x = 1;
  //same for childs
  while (document.getElementById(x))
  {
    currentSurname = document.getElementById(x + 'surname').value;
    currentName = document.getElementById(x + 'name').value;
    currentDate = document.getElementById(x + 'date').value;
    if (currentName && currentSurname && currentDate)
    {
      childs[x] = {
        surname: currentSurname,
        name: currentName,
        born: currentDate
      };
      currentPresentl = document.getElementById(x + 'all');
      currentPresentm = document.getElementById(x + 'morning');
      currentPresenta = document.getElementById(x + 'after');
      if (currentPresentl.checked == true || (currentPresenta.checked == true && currentPresentm.checked == true))
        childs[x].present = "all";
      else if (currentPresenta.checked == true)
        childs[x].present = "after";
      else if (currentPresentm.checked == true)
        childs[x].present = "morning";
    }
    currentDead = document.getElementById(x + 'dead');
    if (currentDead)
      childs[x].dead = document.getElementById(x + 'dead').value;
    x++;
  }
  if (opt == 2)
  {
    //creation final object
    insert_data(members, childs);
  }
  //check if confirm is here yet
  if (!document.getElementById("confirm"))
  {
    //print button to confirm
    newButton.setAttribute('type', 'button');
    newButton.setAttribute('onclick', 'check_all(2)');
    newButton.setAttribute('id', 'confirm');
    currentDiv.appendChild(document.createTextNode('Confirmez-vous la saise ?'));
    currentDiv.appendChild(newBr);
    currentDiv.appendChild(newButton);
    newButton.appendChild(document.createTextNode('Je confirme'));
  }
}

// =============add_dead_date =============

function add_dead_date(prefixe)
{
  var test = document.getElementById(prefixe + "dead");
  if (test)
    return ;
  var id = prefixe + "deadbutton";
  var currentDiv = document.getElementById(id);
  var newInput = document.createElement("input");

  newInput.setAttribute('id', prefixe + 'dead');
  newInput.setAttribute('type', 'date');
  currentDiv.appendChild(newInput);
}

// ============= add_childs ===============

function add_identity(currentDiv, value, type, id)
{
  var contentDiv = document.createElement("div");
  var textDiv = document.createElement("p");
  var inputDiv = document.createElement("input");

  contentDiv.setAttribute('class', 'col-md-3 text-center');
  inputDiv.setAttribute('id', id);
  inputDiv.setAttribute('type', type);
  currentDiv.appendChild(contentDiv);
  textDiv.appendChild(document.createTextNode(value));
  contentDiv.appendChild(textDiv);
  contentDiv.appendChild(inputDiv);
}

function add_button(currentDiv, value, type, id)
{
  var contentDiv = document.createElement("div");
  var buttonDiv = document.createElement("button");
  var func = "add_dead_date('" + type +"')";

  contentDiv.setAttribute('class', 'col-md-3 text-center')
  contentDiv.setAttribute('id', id);
  buttonDiv.setAttribute('type', 'button');
  buttonDiv.setAttribute('onclick', func);
  buttonDiv.appendChild(document.createTextNode(value));
  currentDiv.appendChild(contentDiv);
  contentDiv.appendChild(buttonDiv);
}

function add_childs()
{
  var identityDiv = document.createElement("div");
  var presenceDiv = document.createElement("div");
  var globalDiv = document.createElement("div");
  var currentDiv = document.getElementById('childs');
  var button = document.createElement("button");
  var x;

  x = 1;
  var check = document.getElementById(x);
  while (check)
  {
    x++;
    check = document.getElementById(x);
  }
  globalDiv.setAttribute('id', x);
  currentDiv.appendChild(globalDiv);
  identityDiv.setAttribute('class', 'mt-4 row')
  identityDiv.setAttribute('style', 'border-top: 1px solid')
  globalDiv.appendChild(identityDiv);
  id = x + 'surname';
  add_identity(identityDiv, "Prénom :", 'text', id);
  id = x + 'name';
  add_identity(identityDiv, "Nom de naissance :", 'text', id);
  id = x + 'date';
  add_identity(identityDiv, "Date de naissance :", 'date', id);
  id = x + 'deadbutton';
  add_button(identityDiv, "Décédé(e)", x, id);

  presenceDiv.setAttribute('class', 'mt-3 row')
  globalDiv.appendChild(presenceDiv);
  id = x + 'morning';
  add_identity(presenceDiv, "Déjeuner :", 'checkbox', id);
  id = x + 'after';
  add_identity(presenceDiv, "Dîner :", 'checkbox', id);
  id = x + 'all';
  add_identity(presenceDiv, "Les deux :", 'checkbox', id);
}
