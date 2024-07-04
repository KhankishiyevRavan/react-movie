const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'b8fc6ef4b74c89ceb9f39efa572a1142',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;