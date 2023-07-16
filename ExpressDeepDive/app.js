// ...

var app = express(); // Instantiate the 'app' variable

// ...

app.use(logger("dev"));

// Register the '/books' route
app.use("/books", bookRoutes);

// ...

// 404 and error handling middleware

// ...

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});

// ...
