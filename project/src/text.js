///Draft
function resultFunction(param) {
  function first(callback) {
    console.log(param);
    if (param === 1) {
      socket.emit("input", {
        name: 1,
      });
    }
    callback;
  }
  function second(callback) {
    param = ref.judge(userChoice, computerChoice);
    callback;
  }

  function third(callback) {
    console.log("a");
  }
  first(second(third));
}
resultFunction();

//////////////////////////////

socket.on("dataFromDB", (data) => {
  setResponse((state) => {
    return data;
  });
});
() => {
  timerToClearSomewhere.current = setInterval(() => setShowLoading(true), 10);

  return () => {
    clearInterval(timerToClearSomewhere.current);
  };
};
