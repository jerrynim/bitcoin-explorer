export const makeDateSexy = (seconds) => {
  const date = new Date(null);
  date.setSeconds(seconds);
  return date.toUTCString();
};

export const stringToJSON = (string) => {
  try {
    return JSON.parse(string);
  } catch (e) {
    console.log(e);
  }
};

export const parseMessage = (message) => {
  //MessageEvent {isTrusted: true,
  //data: "{"type":"REQUEST_MEMPOOL","data":null}",
  // origin: "ws://localhost:4000", lastEventId: "", source: null, …}
  if (typeof message.data === "string") {
    const { data } = message;
    const parsedMessage = stringToJSON(data);
    if (parsedMessage !== null) {
      const { type } = parsedMessage;
      if (type === "BLOCKCHAIN_RESPONSE") {
        //console.log(parsedMessage);
        //{type: "BLOCKCHAIN_RESPONSE", data: Array(1)}
        // data: [{…}]
        // type: "BLOCKCHAIN_RESPONSE"
        // __proto__: Object
        return parsedMessage.data;
      } else {
        return null;
      }
    }
  }
};
