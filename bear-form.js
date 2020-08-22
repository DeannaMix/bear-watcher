import { userBear } from './river.js';

const bearCard = [];

const printBearForm = () => {
    $("#bear-form-container").append(`
    <form id="bear-form">
        <div class="form-group">
          <label for="bear-input">Enter Bear Name</label>
          <input type="bear" class="form-control" id="bearInfo" aria-describedby="emailHelp">
          <small id="emailHelp" form-text text-muted">Enter the bear name.</small>
        </div>
        <div class="form-group">
            <label for="exampleFormControlFile1">Choose Bear Photo</label>
            <input type="file" class="form-control-file" id="bear-img">
          </div>
        <button type="submit" class="btn btn-primary" id="submit-bear">Submit</button>
      </form>`);
};


const pushBearInfo = () => {
    $("#bear-form").submit((event) => {
        event.preventDefault();

        let bearForm = {};
        bearForm.bearName = $("#bearInfo").val();
        console.log("bearInfo.bearName", bearForm.bearName)
        bearForm.bearImg = $("#submit-bear").val();

        bearCard.push(bearForm);
        return userBear(bearCard);
    }); 
};


export { printBearForm, pushBearInfo };