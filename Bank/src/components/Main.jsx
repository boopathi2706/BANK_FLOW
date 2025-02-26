import "../css/Main.css";

const Main = () => {
  const handlechat = () => {
    const chatbot = document.getElementById("chatbot");
    if (chatbot) {
      chatbot.classList.remove("showbot");
      chatbot.classList.add("hidebot");
    }
  };
  const handleShowchat = () => {
    const chatbot = document.getElementById("chatbot");
    if (chatbot) {
      chatbot.classList.add("showbot");
      chatbot.classList.remove("hidebot");
    }
  };

  return (
    <div className="main_body">
      <div className="sequare"></div>
      <div className="small_sequare"></div>
      <div className="small_sequare1"></div>

      <div className="main_container">
        <div className="img_main">
          <h3>Bank Flow</h3>
          <div className="images"></div>
        </div>
        <form action="" className="main_form">
          <h1>Happy to See You !</h1>
          <h3>Enter Branch code and check It</h3>
          <div className="inputs_main">
            <input type="text" placeholder="EX : BXE2000SBI" />
            <i class="fa-solid fa-building-columns"></i>
          </div>
          <button>Check</button>
        </form>
      </div>
      <div className="ai">
        <div className="ai_container" onClick={handleShowchat}></div>
      </div>
      <div className="chatbot " id="chatbot">
        <div className="closebot">
          <div className="title_chat">
            <i class="fa-solid fa-robot"></i>
            <h3>ChatBot</h3>
          </div>

          <i class="fa-solid fa-xmark" id="closebot" onClick={handlechat}></i>
        </div>
        <div className="chat">
            <div className="message_content"></div>
            <div className="send_area">
               <i class="fa-solid fa-microphone"></i>
              <input type="text" name="" id="send_text" className="send_text" />
              <i class="fa-regular fa-paper-plane"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
