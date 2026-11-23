import GameBoot from "./GameBoot";

export default function Page() {
  return (
    <>
      <canvas id="game"></canvas>

      <div id="hud" hidden>
        <div className="vitals">
          <div className="row">
            <span className="tag">HP</span>
            <span id="hud-health" className="bar health"></span>
          </div>
          <div className="row">
            <span className="tag">ST</span>
            <span id="hud-stamina" className="bar stamina"></span>
          </div>
        </div>
        <div className="kit">
          <div className="row">
            <span className="tag">Draughts</span>
            <span id="hud-draughts"></span>
          </div>
          <div className="row">
            <span className="tag">Tallow</span>
            <span id="hud-tallow"></span>
          </div>
          <div className="row">
            <span className="tag">Weapon</span>
            <span id="hud-weapon"></span>
          </div>
        </div>
        <div id="hud-hint"></div>
        <div id="hud-talk" hidden>
          <p id="hud-speaker"></p>
          <p id="hud-line"></p>
          <ol id="hud-choices"></ol>
          <p className="talk-help">
            <kbd>W</kbd> <kbd>S</kbd> choose &nbsp; <kbd>E</kbd> confirm &nbsp;
            or press a number
          </p>
        </div>
        <div id="hud-boss" hidden>
          <p id="hud-boss-name"></p>
          <p id="hud-boss-health" className="bar"></p>
        </div>
        <p id="hud-inscription" hidden></p>
        <div id="hud-prompt"></div>
      </div>

      <div id="hud-banner"></div>

      <section className="screen" data-screen-panel="loading">
        <p className="dim">Loading...</p>
      </section>

      <section className="screen" data-screen-panel="title" hidden>
        <h1>Hollowborn</h1>
        <p className="dim">The moss walks while the bell sleeps.</p>
        <p className="prompt">click to begin</p>
      </section>

      <section className="screen guide" data-screen-panel="howTo pause" hidden>
        <div className="guide-panel">
          <h2 className="only-howto">HOW TO PLAY</h2>
          <h2 className="only-pause">PAUSED</h2>
          <div className="guide-columns">
            <div>
              <h3>Move</h3>
              <dl>
                <dt>
                  <kbd>W</kbd>
                  <kbd>A</kbd>
                  <kbd>S</kbd>
                  <kbd>D</kbd>
                </dt>
                <dd>Walk</dd>
                <dt>
                  <kbd>Mouse</kbd>
                </dt>
                <dd>Look. Arrow keys also work</dd>
                <dt>
                  <kbd>Shift</kbd>
                </dt>
                <dd>Hold to sprint</dd>
                <dt>
                  <kbd>Space</kbd>
                </dt>
                <dd>
                  Roll in the direction you are moving. Standing still, hop back
                </dd>
                <dt>
                  <kbd>F</kbd>
                </dt>
                <dd>Jump over low walls and onto ledges</dd>
              </dl>
            </div>
            <div>
              <h3>Fight</h3>
              <dl>
                <dt>
                  <kbd>Left click</kbd>
                </dt>
                <dd>Light attack. Keep pressing to chain</dd>
                <dt>
                  <kbd>Right click</kbd>
                </dt>
                <dd>Heavy attack</dd>
                <dt>
                  <kbd>C</kbd>
                </dt>
                <dd>
                  Hold to raise your guard. Every blow you stop costs stamina
                </dd>
                <dt>
                  <kbd>Tab</kbd>
                </dt>
                <dd>Lock on to an enemy</dd>
                <dt>
                  <kbd>Q</kbd>
                </dt>
                <dd>Swap sword and greatblade</dd>
              </dl>
              <p className="guide-note">
                Attacking at a sprint, out of a roll, or in mid-air gives a
                different strike.
              </p>
            </div>
            <div>
              <h3>Survive</h3>
              <dl>
                <dt>
                  <kbd>R</kbd>
                </dt>
                <dd>Drink a draught to heal</dd>
                <dt>
                  <kbd>E</kbd>
                </dt>
                <dd>Rest, speak, or use what is in front of you</dd>
                <dt>
                  <kbd>M</kbd>
                </dt>
                <dd>Sound on or off</dd>
                <dt>
                  <kbd>Esc</kbd>
                </dt>
                <dd>Pause and see this again</dd>
              </dl>
            </div>
          </div>
          <ul className="guide-rules">
            <li>
              Everything costs stamina. When the bar empties, stop and breathe.
            </li>
            <li>
              Enemies glow at the shoulders just before they strike. Roll
              through the blow.
            </li>
            <li>
              Resting at the lantern heals you and refills your draughts, but
              wakes every enemy you killed.
            </li>
            <li>
              When you die, your tallow stays where you last stood firm.
              Recover it before you die again, or lose it.
            </li>
            <li>
              Speak with the Bell-keeper by the lantern. Your goal is to ring
              the bell in the tower to the north.
            </li>
          </ul>
          <p className="prompt only-howto">click to begin</p>
          <p className="prompt only-pause">click to continue</p>
        </div>
      </section>

      <section className="screen" data-screen-panel="contextLost" hidden>
        <h2>THE GRAPHICS DEVICE WENT AWAY</h2>
        <p className="dim">Waiting for it to return. Your progress is safe.</p>
      </section>

      <section className="screen" data-screen-panel="unsupported" hidden>
        <h2>THIS BROWSER CANNOT RUN THE GAME</h2>
        <p className="dim">
          It needs WebGL 2. Try a current version of Chrome, Edge, Firefox, or
          Safari, and check that hardware acceleration is on.
        </p>
      </section>

      <section className="screen" data-screen-panel="failed" hidden>
        <h2>THE GAME COULD NOT START</h2>
        <p id="failed-detail" className="dim"></p>
      </section>

      <GameBoot />
    </>
  );
}
