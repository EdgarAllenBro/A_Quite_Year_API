I do not own the rights to distribute the content within the quiet.json file of this project, all info was obtained from this PDF: https://buriedwithoutceremony.com/wp-content/uploads/2019/08/The-Quiet-Year-Oracle.pdf

full details can be seen and a copy of the game can be purchased here: https://buriedwithoutceremony.com/the-quiet-year


This project is also currently hosted at 107.23.44.87:5050. 
http request can be made to 
http://1007.23.44.87:5050/cards
format for use goes as follows

/cards grabs entire deck fo cards as object with nested objects for each suit and card.

/cards/:suit eg. '/cards/hearts'   this will grab all hearts or other specified suit.

/cards/:suit/:card  eg. '/cards/hearts/ace' this will grab the ace of hearts as an object, showing its 
   two options

   
/cards/:suit/:card/:option    eg. '/cards/hearts/ace/optionOne'  this will return a the text of a specific option from the specific card.

The Quiet year was created by Avery Alder and Published through Buried Without Ceremony