import React, { useState } from 'react';
import './frontpage.css';
import { FaGithub } from 'react-icons/fa';

const Frontpage: React.FC = () => {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  const createStars = () => {
      const starCount = 100;
      const starsList: JSX.Element[] = [];

      for (let i = 0; i < starCount; i++) {
          starsList.push(
              <div
                  className='star'
                  key={i}
                  style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                  }}
              ></div>
          );
      }

      setStars(starsList);
  };

  const removeStars = () => {
      setStars([]);
  };

  return (
    <div className="container">
      <h1>UselessBot</h1>
      <h3>A Discord bot made for no reason at all</h3>
      <p>
        UselessBot is a versatile Discord bot packed with a variety of random features and useful utilities.
        From querying various APIs to offering a set of utilities, it aims to make tasks more seamless and provide a fun experience.
      </p>

      <h3>Invite the bot to your server</h3>
      <a href="https://discord.com/oauth2/authorize?client_id=1136071398993961122&permissions=8&scope=bot" className="bot-link">
        <img
          src="https://img.shields.io/static/v1?label=Invite&message=Useless&color=7289DA&style=flat&logo=discord&logoColor=7289DA&labelColor=2C2F33"
          alt="Invite Useless"
          className="bot-link-image"
        />
      </a>

      <div className="commands">
        <div className="subcommands-container">
          <div className="subcommands"
            onMouseEnter={createStars}
            onMouseLeave={removeStars}
          >
            <h2>General Command List</h2>
            <ul>
              <li>
                !help1
                <span className="tooltip">
                  <b>Description</b><br/>
                  First command list<br/><br/>
                  <b>Usage</b><br/>
                  !help1
                </span>
              </li>
              <li>
                !help2: Command List 2
                <span className="tooltip">
                  <b>Description</b><br/>
                  Second command list<br/><br/>
                  <b>Usage</b><br/>
                  !help2
                </span>
              </li>
              <li>
                !help3: Command List 3
                <span className="tooltip">
                  <b>Description</b><br/>
                  Third command list<br/><br/>
                  <b>Usage</b><br/>
                  !help3
                </span>
              </li>
              <li>
                !help4: Command List 4
                <span className="tooltip">
                  <b>Description</b><br/>
                  Fourth command list<br/><br/>
                  <b>Usage</b><br/>
                  !help4
                </span>
              </li>
              <li>
                !help5: Command List 5
                <span className="tooltip">
                  <b>Description</b><br/>
                  Fifth command list<br/><br/>
                  <b>Usage</b><br/>
                  !help5
                </span>
              </li>
              <li>
                !help6: Command List 6
                <span className="tooltip">
                  <b>Description</b><br/>
                  Sixth command list<br/><br/>
                  <b>Usage</b><br/>
                  !help6
                </span>
              </li>
              <li>
                !commandlist: Command List Overview
                <span className="tooltip">
                  <b>Description</b><br/>
                  Sends a list of all bot commands<br/><br/>
                  <b>Usage</b><br/>
                  !commandlist
                </span>
              </li>
            </ul>
            {stars.length > 0 && <div className='star-container'>{stars}</div>}
          </div>
          <div className="subcommands"
            onMouseEnter={createStars}
            onMouseLeave={removeStars}
          >
            <h2>Command List 1 (HelpEmbed1)</h2>
            <ul>
                <li>
                  !urban
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Retrieves a selection of 1-5 words from Urban Dictionary that match the provided search query<br/><br/>
                    <b>Usage</b><br/>
                    !urban [amount: default = 1 word] [search query]
                  </span>
                </li>
                <li>
                  !qrcode
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Creates a Qr-Code based on the given link<br/><br/>
                    <b>Usage</b><br/>
                    !qrcode [link]
                  </span>
                </li>
                <li>
                  !imgur
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Retrieves a random GIF from Imgur based on the specified category<br/><br/>
                    <b>Usage</b><br/>
                    !imgur [search query]
                  </span>
                </li>
                <li>
                  !wiki
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Retrieves a selection of 1-5 articles from Wikipedia that match the provided search query<br/><br/>
                    <b>Usage</b><br/>
                    !wiki [amount: default = 1 article] [search query]
                  </span>  
                </li>
                <li>
                  !senti
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Calculates teh sentiment value of a Wikipedia article<br/><br/>
                    <b>Usage</b><br/>
                    !senti [link] 
                  </span>
                </li>
            </ul>
            {stars.length > 0 && <div className='star-container'>{stars}</div>}
          </div>
          <div className="subcommands"
            onMouseEnter={createStars}
            onMouseLeave={removeStars}
          >
            <h2>Command List 2 (HelpEmbed2)</h2>
            <ul>
                <li>
                  !mp3
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Converts a YouTube video into a MP3 file based on the given link<br/><br/>
                    <b>Usage</b><br/>
                    !mp3 [link]
                  </span>
                </li>
                <li>
                  !mp4
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Converts a YouTube video into a MP4 file based on the given link<br/><br/>
                    <b>Usage</b><br/>
                    !mp4 [link]
                  </span>
                </li>
                <li>
                  !ascii
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Creates ASCII art based on the given text<br/><br/>
                    <b>Usage</b><br/>
                    !ascii [text]
                  </span>
                </li>
                <li>
                  !asciicm
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Creates ASCII art with CyberModule font based on the given text<br/><br/>
                    <b>Usage</b><br/>
                    !asciicm [text]
                  </span>
                </li>
                <li>
                  !gpt
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Query ChatGPT with any given input<br/><br/>
                    <b>Usage</b><br/>
                    !gpt [content]
                  </span>
                </li>
            </ul>
            {stars.length > 0 && <div className='star-container'>{stars}</div>}
          </div>
          <div className="subcommands"
            onMouseEnter={createStars}
            onMouseLeave={removeStars}
          >
            <h2>Command List 3 (HelpEmbed3)</h2>
            <ul>
                <li>
                  !tts
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Text to speech based on the given text<br/><br/>
                    <b>Usage</b><br/>
                    !tts [text]
                  </span>
                </li>
                <li>
                  !reminder
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Places a reminder based on the given duration in minutes, and text<br/><br/>
                    <b>Usage</b><br/>
                    !reminder [duration: default = 1 minute] [reminder]
                  </span>
                </li>
                <li>
                  !nickname
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Changes your nickname on the server based on the given text<br/><br/>
                    <b>Usage</b><br/>
                    !nickname [text]
                  </span>
                </li>
                <li>
                  !whois
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Gives a thorough description of the person you @ - No @ defaults to yourself<br/><br/>
                    <b>Usage</b><br/>
                    !whois [member]
                  </span>
                </li>
                <li>
                  !resize
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Resizes the image attachment based on the given dimensions<br/><br/>
                    <b>Usage</b><br/>
                    !resize [attachment: image] [width] [height]
                  </span>
                </li>
            </ul>
            {stars.length > 0 && <div className='star-container'>{stars}</div>}
          </div>
          <div className="subcommands"
            onMouseEnter={createStars}
            onMouseLeave={removeStars}
          >
            <h2>Command List 4 (HelpEmbed4)</h2>
            <ul>
                <li>
                  !blur
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Applies a blur filter in the range of 1-5 to the given image<br/><br/>
                    <b>Usage</b><br/>
                    !blur [attachment: image] [blur_range: default = 1]
                  </span>
                </li>
                <li>
                  !sharpen
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Applies a sharpen filter to the given image - Choices: 'mild', 'medium', 'strong', 'extreme'<br/><br/>
                    <b>Usage</b><br/>
                    !sharpen [attachment: image] [sharpen_range: default = 'medium']
                  </span>
                </li>
                <li>
                  !sepia
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Applies a vintage filter to the given image<br/><br/>
                    <b>Usage</b><br/>
                    !sepia [attachment: image]
                  </span>
                </li>
                <li>
                  !watercolor
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Applies a watercolor filter to the given image<br/><br/>
                    <b>Usage</b><br/>
                    !watercolor [attachment: image]
                  </span>
                </li>
                <li>
                  !grayscale
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Applies a grayscale filter to the given image<br/><br/>
                    <b>Usage</b><br/>
                    !grayscale [attachment: image]
                  </span>
                </li>
                <li>
                  !invert
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Applies an invert filter to the given image<br/><br/>
                    <b>Usage</b><br/>
                    !invert [attachment: image]
                  </span>
                </li>
                <li>
                  !solarize
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Applies a solarize filter to the given image<br/><br/>
                    <b>Usage</b><br/>
                    !solarize [attachment: image]
                  </span>
                </li>
            </ul>
            {stars.length > 0 && <div className='star-container'>{stars}</div>}
          </div>
          <div className="subcommands"
            onMouseEnter={createStars}
            onMouseLeave={removeStars}
          >
            <h2>Command List 5 (HelpEmbed5)</h2>
            <ul>
                <li>
                  !anime
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Returns an anime from MAL (My Anime List) based on the given name<br/><br/>
                    <b>Usage</b><br/>
                    !anime [anime]
                  </span>
                </li>
                <li>
                  !manga
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Returns a manga from MAL (My Anime List) based on the given name<br/><br/>
                    <b>Usage</b><br/>
                    !manga [manga]
                  </span>
                </li>
                <li>
                  !steam
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Returns a game from Steam based on the given name<br/><br/>
                    <b>Usage</b><br/>
                    !steam [game]
                  </span>
                </li>
                <li>
                  !translate
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Translates any given text to the target language<br/><br/>
                    <b>Usage</b><br/>
                    !translate [target_lang] [text]
                  </span>
                </li>
                <li>
                  !languagecode
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Shows a text file of the different language codes available for translation<br/><br/>
                    <b>Usage</b><br/>
                    !languagecode
                  </span>
                </li>
            </ul>
            {stars.length > 0 && <div className='star-container'>{stars}</div>}
          </div>
          <div className="subcommands"
            onMouseEnter={createStars}
            onMouseLeave={removeStars}
          >
            <h2>Command List 6 (HelpEmbed6)</h2>
            <ul>
                <li>
                  !texttopdf
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Turns the given text file (.txt) into a PDF with a name of your choice<br/><br/>
                    <b>Usage</b><br/>
                    !texttopdf [attachment: .txt] [name]
                  </span>
                </li>
                <li>
                  !wordtopdf
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Turns the given word file (.docx) into a PDF with a name of your choice<br/><br/>
                    <b>Usage</b><br/>
                    !wordtopdf [attachment: .docx] [name]
                  </span>
                </li>
                <li>
                  !compress
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Compresses a text file<br/><br/>
                    <b>Usage</b><br/>
                    !compress [attachment: .txt]
                  </span>
                </li>
            </ul>
            {stars.length > 0 && <div className='star-container'>{stars}</div>}
          </div>
          <div className="subcommands"
            onMouseEnter={createStars}
            onMouseLeave={removeStars}
          >
            <h2>Side Commands/Files</h2>
            <ul>
                <li>
                  !owner
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Display the owner of the bot<br/><br/>
                    <b>Usage</b><br/>
                    !owner
                  </span>
                </li>
                <li>
                  !botpic
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Display the bot's profile picture<br/><br/>
                    <b>Usage</b><br/>
                    !botpic
                  </span>
                </li>
                <li>
                  !repo
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Link to the bot's repository<br/><br/>
                    <b>Usage</b><br/>
                    !repo
                  </span>
                </li>
            </ul>
            {stars.length > 0 && <div className='star-container'>{stars}</div>}
          </div>
          <div className="subcommands"
            onMouseEnter={createStars}
            onMouseLeave={removeStars}
          >
            <h2>Admin Commands/Files</h2>
            <ul>
                <li>
                  !admin
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Returns an embed with all admin commands<br/><br/>
                    <b>Usage</b><br/>
                    !admin
                  </span>
                </li>
                <li>
                  !delete
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Deletes the specified amount of messages<br/><br/>
                    <b>Usage</b><br/>
                    !delete [amount: default = 1 message]
                  </span>
                </li>
                <li>
                  !kick
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Kicks the specified member<br/><br/>
                    <b>Usage</b><br/>
                    !kick [member]
                  </span>
                </li>
                <li>
                  !reload
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Reloads all the files of the bot<br/><br/>
                    <b>Usage</b><br/>
                    !reload
                  </span>
                </li>
            </ul>
            {stars.length > 0 && <div className='star-container'>{stars}</div>}
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>UselessBot is not affiliated with Discord or any of its partners. UselessBot is open-source and licensed under the MIT License.</p>
        <div className="footer-links">
          <a href="https://github.com/DenizIsikli/UselessBotWebsite" target="_blank" rel="noopener noreferrer">Repository<FaGithub /></a>
          <a href="https://github.com/DenizIsikli" target="_blank" rel="noopener noreferrer">Developer<FaGithub /></a>
        </div>
      </footer>
    </div>
  );
}

export default Frontpage;
