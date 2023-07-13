function make_album(artist: string, title: string, tracks?: number) {
    const album: {[key: string]: any} = {
      artist: artist,
      title: title
    };
  
    if (tracks) {
      album.tracks = tracks;
    }
  
    return album;
  }
  

  const album1 = make_album("AP Dhillon", "Two Hearts Never Break the Same",6);
  const album2 = make_album("Shubh", "Still Rollin", 7);
  const album3 = make_album("Talha Anjum", "Open Letter", 15);
  
 
  console.log(album1);
  console.log("---------------------------------------------------------------------")
  console.log(album2);
  console.log("---------------------------------------------------------------------")
  console.log(album3);
  