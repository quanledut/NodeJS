const setResponseData = (res,status,data) => {
    res.status(status);
    res.json(data);
}

module.exports = setResponseData;