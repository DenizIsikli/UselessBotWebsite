import React from 'react';
import './frontpage.css';
import { FaGithub } from 'react-icons/fa';

const Frontpage: React.FC = () => {
  return (
    <div className="container">
      <h1>UselessBot</h1>
      <h3>A Discord bot made for no reason at all</h3>
      <p>
        UselessBot is a versatile Discord bot packed with a variety of random features and useful utilities.
        From querying various APIs to offering a set of utilities, it aims to make tasks more seamless and provide a fun experience.
      </p>

      <h3>Invite the bot to your server</h3>
      <a href="https://discord.com/oauth2/authorize?client_id=1136071398993961122&permissions=8&scope=bot">
        <img
          src="https://img.shields.io/static/v1?label=Invite&message=Useless&color=7289DA&style=flat&logo=discord&logoColor=7289DA&labelColor=2C2F33"
          alt="Invite Useless"
          className="inline-block"
        />
      </a>

      <div className="commands">
        <div className="subcommands-container">
          <div className="subcommands">
            <h2>General Command List</h2>
            <ul>
              <li>
                !help1: Command List 1
                <span className="tooltip">Description for !help1</span>
              </li>
              <li>
                !help2: Command List 2
                <span className="tooltip">Description for !help2</span>
              </li>
              <li>
                !help3: Command List 3
                <span className="tooltip">Description for !help3</span>
              </li>
              <li>
                !help4: Command List 4
                <span className="tooltip">Description for !help4</span>
              </li>
              <li>
                !help5: Command List 5
                <span className="tooltip">Description for !help5</span>
              </li>
              <li>
                !help6: Command List 6
                <span className="tooltip">Description for !help6</span>
              </li>
              <li>
                !commandlist: Command List Overview
                <span className="tooltip">Description for !commandlist</span>
              </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Command List 1 (HelpEmbed1)</h2>
            <ul>
                <li>
                  !urban
                  <span className="tooltip">Description for !urban</span>
                </li>
                <li>
                  !qrcode
                  <span className="tooltip">Description for !qrcode</span>
                </li>
                <li>
                  !imgur
                  <span className="tooltip">Description for !imgur</span>
                </li>
                <li>
                  !wiki
                  <span className="tooltip">Description for !wiki</span>  
                </li>
                <li>
                  !senti
                  <span className="tooltip">Description for !senti</span>
                </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Command List 2 (HelpEmbed2)</h2>
            <ul>
                <li>
                  !mp3
                  <span className="tooltip">Description for !mp3</span>
                </li>
                <li>
                  !mp4
                  <span className="tooltip">Description for !mp4</span>
                </li>
                <li>
                  !ascii
                  <span className="tooltip">Description for !ascii</span>
                </li>
                <li>
                  !asciicm
                  <span className="tooltip">Description for !asciicm</span>
                </li>
                <li>
                  !gpt
                  <span className="tooltip">Description for !gpt</span>
                </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Command List 3 (HelpEmbed3)</h2>
            <ul>
                <li>
                  !tts
                  <span className="tooltip">Description for !tts</span>
                </li>
                <li>
                  !reminder
                  <span className="tooltip">Description for !reminder</span>
                </li>
                <li>
                  !nick
                  <span className="tooltip">Description for !nick</span>
                </li>
                <li>
                  !whois
                  <span className="tooltip">Description for !whois</span>
                </li>
                <li>
                  !resize
                  <span className="tooltip">Description for !resize</span>
                </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Command List 4 (HelpEmbed4)</h2>
            <ul>
                <li>
                  !blur
                  <span className="tooltip">Description for !blur</span>
                </li>
                <li>
                  !sharpen
                  <span className="tooltip">Description for !sharpen</span>
                </li>
                <li>
                  !sepia
                  <span className="tooltip">Description for !sepia</span>
                </li>
                <li>
                  !watercolor
                  <span className="tooltip">Description for !watercolor</span>
                </li>
                <li>
                  !grayscale
                  <span className="tooltip">Description for !grayscale</span>
                </li>
                <li>
                  !invert
                  <span className="tooltip">Description for !invert</span>
                </li>
                <li>
                  !solarize
                  <span className="tooltip">Description for !solarize</span>
                </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Command List 5 (HelpEmbed5)</h2>
            <ul>
                <li>
                  !anime
                  <span className="tooltip">Description for !anime</span>
                </li>
                <li>
                  !manga
                  <span className="tooltip">Description for !manga</span>
                </li>
                <li>
                  !steam
                  <span className="tooltip">Description for !steam</span>
                </li>
                <li>
                  !translate
                  <span className="tooltip">Description for !translate</span>
                </li>
                <li>
                  !languagecode
                  <span className="tooltip">Description for !languagecode</span>
                </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Command List 6 (HelpEmbed6)</h2>
            <ul>
                <li>
                  !texttopdf
                  <span className="tooltip">Description for !texttopdf</span>
                </li>
                <li>
                  !wordtopdf
                  <span className="tooltip">Description for !wordtopdf</span>
                </li>
                <li>
                  !compress
                  <span className="tooltip">Description for !compress</span>
                </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Side Commands/Files</h2>
            <ul>
                <li>
                  !owner
                  <span className="tooltip">Description for !owner</span>
                </li>
                <li>
                  !botpic
                  <span className="tooltip">Description for !botpic</span>
                </li>
                <li>
                  !repo
                  <span className="tooltip">Description for !repo</span>
                </li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Admin Commands/Files</h2>
            <ul>
                <li>
                  !admin
                  <span className="tooltip">Description for !admin</span>
                </li>
                <li>
                  !delete
                  <span className="tooltip">Description for !delete</span>
                </li>
                <li>
                  !kick
                  <span className="tooltip">Description for !kick</span>
                </li>
                <li>
                  !reload
                  <span className="tooltip">Description for !reload</span>
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
