# Key Learnings

* I started learning RAG and LLMs on the day task was assigned . On the hindsight it doesn't seems tough , but , it does go down a deep rabbit hole .

* From a noob to somewhat better than noob , i have researched multiple things about RAG (and i could not implemnet them due to the given time constraints and my exams) .

Here are the things i found :

1. *    RAG are not exceptionally great , they are as useful as ctrl+F , these system needs an iterative approach , which is implemented using , CRAG (Corrective RAG) . 

   * There is a whole paper on this and a video on langchain's official YT channel on how to make one.
  

2. * PDF chatbot have a very limited ability . In general , pdf retrievers are not smart enough to tag images and it's also tough to tag them programatically .

    * So visual PDF , the ones with charts are at innate disadvantage . This can be fixed with help of multimodal LLM like Gemini 1.5 Pro . 
   
   * Tagging of images can be done in PDFs as well but it needs custom implementation .

3.  * RAG are not accurate on their own and cosine similarity is just one part of the puzzle . The output heavily depends on the embedding models as well . And even chunking to some extent.
    * MBET does exactly this , its a table to compare Embedding models with it's features and use cases
  
4. PDFs containing sensitive info are still vulnerable . This could be rectfied with various tools .

5. Pinecone's namespace and indexes are important for seperation of data . This can be controlled programatically and can prevent pollution and leak of other PDFs knowledge to other PDFs . Ideally , metadata should be used to query as well . This model uses NOSQL + VECTOR DB to handle querying .

6. Streaming models improves UX , but i personally don't find it that impactful . I can argue that Non streaming models wait time can be replaced by a good ui animation .


# CHALLENGES

1. Setting up of langchain and it's ever changing documentation makes it tough to keep up . We need to keep track of change log regularly . 

2. Setting up of audio feature was tough and i have not been able to implement it . Not only that , the audio is either transferred in bytes or blob format .

3. Improving User Interface related to Audio , i tried create a live waveform while recording audio .

