import { randomUUID } from "node:crypto";


export class DatabaseMemory{
  #videos = new Map();

list(search){
   return Array.from(this.#videos.entries())
   .map((videoArray) => {
   const id = videoArray[0];
   const data = videoArray[1];

   return {
    id,
    ...data,
};
  /*
   esse (...) é um operador q espalha os dados 

    return {
    id,
    ...data,}

    esse retorne acima é igual a 

    return {

    id: 1,
    title: "Video 01",
    description: "Esse é o vídeo 01",
    duration: 180,
      };

      ou igual a 
      return {
    id,
    title: data.title,
    description: data.description,
    duration: data.duration,
    };


   */

   })
   .filter(video => {
    if(search){
        return video.title.includes(search)
    }

    return true;
   })


}

create(video){
    const videoId = randomUUID();

    this.#videos.set(videoId, video);
}

update(id, video){
    this.#videos.set(id, video);
}


delete(id){
    this.#videos.delete(id);
}


}