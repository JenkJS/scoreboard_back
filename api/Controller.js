import Player from './Player.js'


export const getPlayers = async  (req,res)=>{
  try {
    const posts = await Player.find();
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить тэги',
    });
  }
}
