import React from 'react';
import './frontpage.css';

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
              <li>!help1: Command List 1</li>
              <li>!help2: Command List 2</li>
              <li>!help3: Command List 3</li>
              <li>!help4: Command List 4</li>
              <li>!help5: Command List 5</li>
              <li>!help6: Command List 6</li>
              <li>!commandlist: Command List Overview</li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Command List 1 (HelpEmbed1)</h2>
            <ul>
                <li>!urban</li>
                <li>!qrcode</li>
                <li>!imgur</li>
                <li>!wiki</li>
                <li>!senti</li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Command List 2 (HelpEmbed2)</h2>
            <ul>
                <li>!mp3</li>
                <li>!mp4</li>
                <li>!ascii</li>
                <li>!asciicm</li>
                <li>!gpt</li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Command List 3 (HelpEmbed3)</h2>
            <ul>
                <li>!tts</li>
                <li>!reminder</li>
                <li>!nick</li>
                <li>!whois</li>
                <li>!resize</li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Command List 4 (HelpEmbed4)</h2>
            <ul>
                <li>!blur</li>
                <li>!sharpen</li>
                <li>!sepia</li>
                <li>!watercolor</li>
                <li>!grayscale</li>
                <li>!invert</li>
                <li>!solarize</li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Command List 5 (HelpEmbed5)</h2>
            <ul>
                <li>!anime</li>
                <li>!manga</li>
                <li>!steam</li>
                <li>!translate</li>
                <li>!languagecode</li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Command List 6 (HelpEmbed6)</h2>
            <ul>
                <li>!texttopdf</li>
                <li>!wordtopdf</li>
                <li>!compress</li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Side Commands/Files</h2>
            <ul>
                <li>!owner</li>
                <li>!botpic</li>
                <li>!repo</li>
            </ul>
          </div>
          <div className="subcommands">
            <h2>Admin Commands/Files</h2>
            <ul>
                <li>!admin</li>
                <li>!delete</li>
                <li>!kick</li>
                <li>!reload</li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>UselessBot is not affiliated with Discord or any of its partners.</p>
        <p>UselessBot is open-source and licensed under the MIT License.</p>
        <a href="https://github.com/DenizIsikli" target="_blank" rel="noopener noreferrer">Developer</a>
      </footer>
    </div>
  );
}

export default Frontpage;
