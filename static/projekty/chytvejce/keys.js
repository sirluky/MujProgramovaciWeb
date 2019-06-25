function keyPressed(){
  if(running){
    let hmm;
    let currentkey = char.s;
  if(moves < 2 ){
    if(char.s == 'menu')
    hmm = true;


    if(keyCode == '68')
      char.s = 'ld';
    else if(keyCode == '70')
      char.s = 'lt';
    else if(keyCode == '75')
      char.s = 'rd';
    else if(keyCode == '74')
      char.s = 'rt';
      if(hmm) startgame();
        redraw();

    } else {
      text('Moc se hýbeš.', 100,height-50);
    }
    if(currentkey != char.s)
    moves++;

  }
}
