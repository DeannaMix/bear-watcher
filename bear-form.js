import { userBear } from './river.js';

const bearCard = [];

const printBearForm = () => {
    $("#bear-form-container").append(`
    <form id="bear-form">
        <div class="form-group">
          <label for="bear-input">Enter Bear Name</label>
          <input type="bear" class="form-control" id="bearInfo" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Enter Bear Image URL</label>
            <input type="text" class="form-control" id="bear-img">
          </div>
        <button type="submit" class="btn btn-primary" id="submit-bear">Submit</button>
      </form>`);
};


const pushBearInfo = () => {
    $("#bear-form").submit((event) => {
        event.preventDefault();

        let bearForm = {};
        bearForm.bearName = $("#bearInfo").val();
        bearForm.bearImg = $("#bear-img").val();

        bearCard.push(bearForm);
        return userBear(bearCard);
    }); 
};

export { printBearForm, pushBearInfo };