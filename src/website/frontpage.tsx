import React, { useState } from 'react';
import './frontpage.css';
import { FaGithub } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';


const toggleExpand = (id: string) => {
  const element = document.getElementById(id);
  const header = element?.previousElementSibling;
  if (element?.classList.contains('expanded')) {
    element.classList.remove('expanded');
    header?.classList.remove('expanded');
  } else {
    element?.classList.add('expanded');
    header?.classList.add('expanded');
  }
};

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
      <a href="https://discord.com/oauth2/authorize?client_id=1136071398993961122&permissions=8&scope=bot" className="bot-link">Add To Server</a>
      <div className="commands">
        <div className="subcommands-container">
          <div className="subcommands">
            <h2 onClick={() => toggleExpand('general-command-list')}>
              General Command List
              <span className="arrow-indicator"><FaArrowDown /></span>
            </h2>
            <ul id="general-command-list">
              <li
                onMouseEnter={createStars}
                onMouseLeave={removeStars}
              >
                !website
                <span className="tooltip">
                  <b>Description</b><br/>
                  Website for the Discord Bot<br/><br/>
                  {stars.length > 0 && <div className='star-container'>{stars}</div>}
                </span>
              </li>
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
                !help2
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
                !help3
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
                !help4
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
                !help5
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
                !help6
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
                !help7
                <span className="tooltip">
                  <b>Description</b><br/>
                  Seventh command list<br/><br/>
                  <b>Usage</b><br/>
                  !help7
                  {stars.length > 0 && <div className='star-container'>{stars}</div>}
                </span>
              </li>
              <li
                onMouseEnter={createStars}
                onMouseLeave={removeStars}
              >
                !help8
                <span className="tooltip">
                  <b>Description</b><br/>
                  Eighth command list<br/><br/>
                  <b>Usage</b><br/>
                  !help8
                  {stars.length > 0 && <div className='star-container'>{stars}</div>}
                </span>
              </li>
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
                !commandlist
                <span className="tooltip">
                  <b>Description</b><br/>
                  Command list of all bot commands<br/><br/>
                  <b>Aliases</b><br/>
                  cmdl<br/><br/>
                  <b>Usage</b><br/>
                  !commandlist
                  {stars.length > 0 && <div className='star-container'>{stars}</div>}
                </span>
              </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2 onClick={() => toggleExpand('command-list-1')}>
              Command List 1 (!help1)
              <span className="arrow-indicator"><FaArrowDown /></span>
            </h2>
            <ul id="command-list-1">
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
            <h2 onClick={() => toggleExpand('command-list-2')}>
              Command List 2 (!help2)
              <span className="arrow-indicator"><FaArrowDown /></span>
            </h2>
            <ul id="command-list-2">
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
            <h2 onClick={() => toggleExpand('command-list-3')}>
              Command List 3 (!help3)
              <span className="arrow-indicator"><FaArrowDown /></span>
            </h2>
            <ul id="command-list-3">
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
                    <b>Aliases</b><br/>
                    rimg<br/><br/>
                    <b>Usage</b><br/>
                    !resize [attachment: image] [width] [height]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2 onClick={() => toggleExpand('command-list-4')}>
              Command List 4 (!help4)
              <span className="arrow-indicator"><FaArrowDown /></span>
            </h2>
            <ul id="command-list-4">
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
            <h2 onClick={() => toggleExpand('command-list-5')}>
              Command List 5 (!help5)
              <span className="arrow-indicator"><FaArrowDown /></span>
            </h2>
            <ul id="command-list-5">
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
            <h2 onClick={() => toggleExpand('command-list-6')}>
              Command List 6 (!help6)
              <span className="arrow-indicator"><FaArrowDown /></span>
            </h2>
            <ul id="command-list-6">
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
            <h2 onClick={() => toggleExpand('command-list-7')}>
              Command List 7 (!help7)
              <span className="arrow-indicator"><FaArrowDown /></span>
            </h2>
            <ul id="command-list-7">
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
                  !serverinfo
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Retrieves information about the server<br/><br/>
                    <b>Usage</b><br/>
                    !serverinfo
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !summyt
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Summarizes a YouTube video using Summarize.tech<br/><br/>
                    <b>Usage</b><br/>
                    !summyt [attachment: youtube_url]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2 onClick={() => toggleExpand('command-list-8')}>
              Command List 8 (!help8)
              <span className="arrow-indicator"><FaArrowDown /></span>
            </h2>
            <ul id="command-list-8">
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
                    Display the bots profile picture<br/><br/>
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
                    Link to the bots repository<br/><br/>
                    <b>Usage</b><br/>
                    !repo
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !codeformat
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Formats code based on the given language<br/><br/>
                    <b>Aliases</b><br/>
                    cf<br/><br/>
                    <b>Usage</b><br/>
                    !codeformat [language] [code]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !afk
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Description: Starts an AFK automation for the specified amount of seconds<br></br>(Type 'afkstop' to stop the timer) - Default = 60<br/><br/>
                    <b>Usage</b><br/>
                    !afk
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2 onClick={() => toggleExpand('admin-command-list-1')}>
              Admin Command List (!admin)
              <span className="arrow-indicator"><FaArrowDown /></span>
            </h2>
            <ul id="admin-command-list-1">
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}  
                >
                  !delete
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Deletes the specified amount of messages<br/><br/>
                    <b>Aliases</b><br/>
                    del<br/><br/>
                    <b>Usage</b><br/>
                    !delete [amount] - Default = 1
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
                    Kicks the specified user<br/><br/>
                    <b>Usage</b><br/>
                    !kick [user]
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
                    Reloads all bot files<br/><br/>
                    <b>Usage</b><br/>
                    !reload
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !mute
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Mutes the specified user<br/><br/>
                    <b>Usage</b><br/>
                    !mute [user]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !unmute
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Unmutes the specified user<br/><br/>
                    <b>Usage</b><br/>
                    !unmute [user]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2 onClick={() => toggleExpand('admin-command-list-2')}>
              Admin Command List 2 (!admin)
              <span className="arrow-indicator"><FaArrowDown /></span>
            </h2>
            <ul id="admin-command-list-2">
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !addrole
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Adds the specified role to the specified user<br/><br/>
                    <b>Usage</b><br/>
                    !addrole [role] [user]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !delrole
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Removes the specified role from the specified user<br/><br/>
                    <b>Usage</b><br/>
                    !delrole [role] [member]
                    {stars.length > 0 && <div className='star-container'>{stars}</div>}
                  </span>
                </li>
                <li
                  onMouseEnter={createStars}
                  onMouseLeave={removeStars}
                >
                  !createrole
                  <span className="tooltip">
                    <b>Description</b><br/>
                    Creates a new role<br/><br/>
                    <b>Usage</b><br/>
                    !createrole [role_name]
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
