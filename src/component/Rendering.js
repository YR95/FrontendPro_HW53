import User from './User';

class Rendering {


 static  rendering() {
    let unList = document.createElement("ul");
    unList.id = "listUsers";
    User.USERSINFILE.forEach(x => {
      let li = document.createElement("li");
      li.id = "li".concat(x);
      li.innerText = JSON.stringify(x);
      unList.append(li);
    });
    document.body.append(unList);
  }
}

export default Rendering;