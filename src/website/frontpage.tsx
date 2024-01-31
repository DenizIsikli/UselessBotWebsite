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
          <div className="subcommands">
            <h2>General Command List</h2>
            <ul>
              <li
                onMouseEnter={createStars}
                onMouseLeave={removeStars}
              >
                !help1
                <span className="tooltip">
                  <b>Description</b><br/>
                  First command list<br/><br/>
                  <b>Usage</b><br/>
                  !help1
                  {stars.length > 0 && <div className='star-container'>{stars}</div>}
                </span>
              </li>
              <li
                onMouseEnter={createStars}
                onMouseLeave={removeStars}
              >
                !help2: Command List 2
                <span className="tooltip">
                  <b>Description</b><br/>
                  Second command list<br/><br/>
                  <b>Usage</b><br/>
                  !help2
                  {stars.length > 0 && <div className='star-container'>{stars}</div>}
                </span>
              </li>
              <li
                onMouseEnter={createStars}
                onMouseLeave={removeStars}
              >
                !help3: Command List 3
                <span className="tooltip">
                  <b>Description</b><br/>
                  Third command list<br/><br/>
                  <b>Usage</b><br/>
                  !help3
                  {stars.length > 0 && <div className='star-container'>{stars}</div>}
                </span>
              </li>
              <li
                onMouseEnter={createStars}
                onMouseLeave={removeStars}
              >
                !help4: Command List 4
                <span className="tooltip">
                  <b>Description</b><br/>
                  Fourth command list<br/><br/>
                  <b>Usage</b><br/>
                  !help4
                  {stars.length > 0 && <div className='star-container'>{stars}</div>}
                </span>
              </li>
              <li
                onMouseEnter={createStars}
                onMouseLeave={removeStars}
              >
                !help5: Command List 5
                <span className="tooltip">
                  <b>Description</b><br/>
                  Fifth command list<br/><br/>
                  <b>Usage</b><br/>
                  !help5
                  {stars.length > 0 && <div className='star-container'>{stars}</div>}
                </span>
              </li>
              <li
                onMouseEnter={createStars}
                onMouseLeave={removeStars}
              >
                !help6: Command List 6
                <span className="tooltip">
                  <b>Description</b><br/>
                  Sixth command list<br/><br/>
                  <b>Usage</b><br/>
                  !help6
                  {stars.length > 0 && <div className='star-container'>{stars}</div>}
                </span>
              </li>
              <li
                onMouseEnter={createStars}
                onMouseLeave={removeStars}
              >
                !commandlist: Command List Overview
                <span className="tooltip">
                  <b>Description</b><br/>
                  Sends a list of all bot commands<br/><br/>
                  <b>Usage</b><br/>
                  !commandlist
                  {stars.length > 0 && <div className='star-container'>{stars}</div>}
                </span>
              </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Command List 1 (HelpEmbed1)</h2>
            <ul>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !urban
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Retrieves a selection of 1-5 words from Urban Dictionary that match the provided search query - word amount must be specified<br/><br/>
                    <b>Usage</b><br/>
                    !urban [word amount] [search query]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !qrcode
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Creates a Qr-Code based on the given link<br/><br/>
                    <b>Usage</b><br/>
                    !qrcode [link]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !imgur
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Retrieves a random GIF from Imgur based on the specified category<br/><br/>
                    <b>Usage</b><br/>
                    !imgur [search query]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !wiki
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Retrieves a selection of 1-5 articles from Wikipedia that match the provided search query - article amount must be specified<br/><br/>
                    <b>Usage</b><br/>
                    !wiki [article amount] [search query]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>  
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !senti
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Calculates teh sentiment value of a Wikipedia article<br/><br/>
                    <b>Usage</b><br/>
                    !senti [link]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Command List 2 (HelpEmbed2)</h2>
            <ul>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !mp3
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Converts a YouTube video into a MP3 file based on the given link<br/><br/>
                    <b>Usage</b><br/>
                    !mp3 [link]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !mp4
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Converts a YouTube video into a MP4 file based on the given link<br/><br/>
                    <b>Usage</b><br/>
                    !mp4 [link]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !ascii
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Creates ASCII art based on the given text<br/><br/>
                    <b>Usage</b><br/>
                    !ascii [text]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !asciicm
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Creates ASCII art with CyberModule font based on the given text<br/><br/>
                    <b>Usage</b><br/>
                    !asciicm [text]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !gpt
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Query ChatGPT with any given input<br/><br/>
                    <b>Usage</b><br/>
                    !gpt [content]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Command List 3 (HelpEmbed3)</h2>
            <ul>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !tts
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Text to speech based on the given text<br/><br/>
                    <b>Usage</b><br/>
                    !tts [text]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !reminder
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Places a reminder based on the given duration in minutes, and text<br/><br/>
                    <b>Usage</b><br/>
                    !reminder [duration: default = 1 minute] [reminder]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !nickname
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Changes your nickname on the server based on the given text<br/><br/>
                    <b>Usage</b><br/>
                    !nickname [text]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !whois
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Gives a thorough description of the person you @ - No @ defaults to yourself<br/><br/>
                    <b>Usage</b><br/>
                    !whois [member]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !resize
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Resizes the image attachment based on the given dimensions<br/><br/>
                    <b>Usage</b><br/>
                    !resize [attachment: image] [width] [height]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Command List 4 (HelpEmbed4)</h2>
            <ul>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !blur
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Applies a blur filter in the range of 1-5 to the given image<br/><br/>
                    <b>Usage</b><br/>
                    !blur [attachment: image] [blur_range: default = 1]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !sharpen
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Applies a sharpen filter to the given image - Choices: 'mild', 'medium', 'strong', 'extreme'<br/><br/>
                    <b>Usage</b><br/>
                    !sharpen [attachment: image] [sharpen_range: default = 'medium']
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !sepia
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Applies a vintage filter to the given image<br/><br/>
                    <b>Usage</b><br/>
                    !sepia [attachment: image]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !watercolor
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Applies a watercolor filter to the given image<br/><br/>
                    <b>Usage</b><br/>
                    !watercolor [attachment: image]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !grayscale
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Applies a grayscale filter to the given image<br/><br/>
                    <b>Usage</b><br/>
                    !grayscale [attachment: image]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !invert
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Applies an invert filter to the given image<br/><br/>
                    <b>Usage</b><br/>
                    !invert [attachment: image]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !solarize
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Applies a solarize filter to the given image<br/><br/>
                    <b>Usage</b><br/>
                    !solarize [attachment: image]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Command List 5 (HelpEmbed5)</h2>
            <ul>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !anime
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Returns an anime from MAL (My Anime List) based on the given name<br/><br/>
                    <b>Usage</b><br/>
                    !anime [anime]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !manga
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Returns a manga from MAL (My Anime List) based on the given name<br/><br/>
                    <b>Usage</b><br/>
                    !manga [manga]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !steam
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Returns a game from Steam based on the given name<br/><br/>
                    <b>Usage</b><br/>
                    !steam [game]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !translate
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Translates any given text to the target language - Use !languagecode if unsure<br/><br/>
                    <b>Usage</b><br/>
                    !translate [target_lang] [text]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !languagecode
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Shows a text file of the different language codes available for translation<br/><br/>
                    <b>Usage</b><br/>
                    !languagecode
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Command List 6 (HelpEmbed6)</h2>
            <ul>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !texttopdf
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Turns the given text file (.txt) into a PDF with a name of your choice<br/><br/>
                    <b>Usage</b><br/>
                    !texttopdf [attachment: .txt] [name]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !wordtopdf
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Turns the given word file (.docx) into a PDF with a name of your choice<br/><br/>
                    <b>Usage</b><br/>
                    !wordtopdf [attachment: .docx] [name]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !compress
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Compresses any file<br/><br/>
                    <b>Usage</b><br/>
                    !compress [attachment: file]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseLeave={removeStars}
                  onMouseEnter={createStars}
                >
                  !decompress
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Decompresses any file<br/><br/>
                    <b>Usage</b><br/>
                    !decompress [attachment: file]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !pomodoro
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Starts a pomodoro timer with the given study duration, break duration and cycles<br/><br/>
                    <b>Usage</b><br/>
                    !pomodoro [float: study_duration] [float: break_duration] [int: cycles]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li 
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !pomodorostop
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Stops the pomodoro timer<br/><br/>
                    <b>Usage</b><br/>
                    !pomodorostop
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Command List 7 (HelpEmbed7)</h2>
            <ul>
                <li
                  onMouseEnter={createStars} 
                  onMouseLeave={removeStars}
                >
                  !callduration
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Calculates the duration of your current voice call<br/><br/>
                    <b>Usage</b><br/>
                    !callduration
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !pdfmerge
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Merges a maximum of 2 PDF files into one<br/><br/>
                    <b>Usage</b><br/>
                    !pdfmerge [attachment: pdf_file]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !pricerunner
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Retrieves a selection of 20 products from PriceRunner<br/><br/>
                    <b>Usage</b><br/>
                    !pricerunner [product name]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !website
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Sends a link to the bots website<br/><br/>
                    <b>Usage</b><br/>
                    !website
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Side Commands/Files</h2>
            <ul>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !owner
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Display the owner of the bot<br/><br/>
                    <b>Usage</b><br/>
                    !owner
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !botpic
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Display the bot's profile picture<br/><br/>
                    <b>Usage</b><br/>
                    !botpic
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !repo
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Link to the bot's repository<br/><br/>
                    <b>Usage</b><br/>
                    !repo
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Admin Commands/Files</h2>
            <ul>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !admin
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Returns an embed with all admin commands<br/><br/>
                    <b>Usage</b><br/>
                    !admin
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}  
                >
                  !delete
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Deletes the specified amount of messages<br/><br/>
                    <b>Usage</b><br/>
                    !delete [amount: default = 1 message]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !kick
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Kicks the specified member<br/><br/>
                    <b>Usage</b><br/>
                    !kick [member]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !reload
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Reloads all the files of the bot<br/><br/>
                    <b>Usage</b><br/>
                    !reload
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
            </ul>
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
