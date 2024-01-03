function status(request, response) {
  response.status(200).json({
    result: 'status working'
  });
}

export default status;
