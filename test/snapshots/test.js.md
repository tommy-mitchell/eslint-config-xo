# Snapshot report for `test/test.js`

The actual snapshot is saved in `test.js.snap`.

Generated by [AVA](https://avajs.dev).

## lints and fixes ts/fixture.cts

> Snapshot 1

    {
      errorCount: 13,
      exitCode: 1,
      fixed: `import { zipConvert } from "convert-zip-to-gps";␊
      ␊
      const PRIVATE_KEY = "deadbeef";␊
      ␊
      function getCoordinates(zipCode: number): string␊
      {␊
          // some coords have a space in between - remove␊
          const ll: string[] = (zipConvert(zipCode) as string).split(", ");␊
          // default zoom level␊
          const zoom = "14z";␊
          ␊
          const coords: string = [...ll, zoom].join(",");␊
      ␊
          return \`@${coords}\`;␊
      }␊
      ␊
      export default async function Search(query: string, zipCode: number): Promise<any>␊
      {␊
          const coordinates = getCoordinates(zipCode);␊
      ␊
          const search = {␊
              api_key: PRIVATE_KEY,␊
              engine:  "google_maps",␊
              ll:      coordinates,␊
              q:       query␊
          };␊
      ␊
          // API?key=value&key=value␊
          const searchString = Object.keys(search).map(key => [key, search[key]].join("=")).join("&");␊
      ␊
          return new Promise<any>(async (resolve, reject) => {␊
              try {␊
                  const searchResponse = await fetch(\`https://serpapi.com/search.json?${searchString}\`);␊
                  const searchResults  = (await searchResponse.json()).local_results;␊
      ␊
                  for await(const result of searchResults)␊
                  {␊
                      const response     = await fetch(\`${result.photos_link}&api_key=${search.api_key}\`);␊
                      const photosResult = await response.json();␊
                      ␊
                      result.photos = photosResult.photos?.map(photos => photos.image)␊
                  }␊
      ␊
                  resolve(searchResults);␊
              }␊
              catch(error) {␊
                  reject(\`Fetch failed: ${error}\`);␊
              }␊
          });␊
      }`,
      lintErrors: `␊
        fixture.cts:3:7␊
        ✖   3:7   Variable name PRIVATE_KEY must match one of the following formats: strictCamelCase             @typescript-eslint/naming-convention␊
        ✖   8:27  Unsafe call of a(n) error type typed value.                                                    @typescript-eslint/no-unsafe-call␊
        ✖  17:31  Function name Search must match one of the following formats: strictCamelCase                  @typescript-eslint/naming-convention␊
        ✖  22:9   Object Literal Property name api_key must match one of the following formats: strictCamelCase  @typescript-eslint/naming-convention␊
        ✖  31:29  Promise executor functions should not be async.                                                no-async-promise-executor␊
        ✖  34:19  Unsafe assignment of an any value.                                                             @typescript-eslint/no-unsafe-assignment␊
        ✖  34:66  Do not access a member directly from an await expression.                                      unicorn/no-await-expression-member␊
        ✖  39:23  Unsafe assignment of an any value.                                                             @typescript-eslint/no-unsafe-assignment␊
        ✖  41:17  Unsafe assignment of an any value.                                                             @typescript-eslint/no-unsafe-assignment␊
        ✖  41:33  Unsafe call of a(n) any typed value.                                                           @typescript-eslint/no-unsafe-call␊
        ✖  41:68  Unsafe return of a value of type any.                                                          @typescript-eslint/no-unsafe-return␊
        ✖  47:13  Expected the Promise rejection reason to be an Error.                                          @typescript-eslint/prefer-promise-reject-errors␊
        ✖  47:37  Invalid type "unknown" of template literal expression.                                         @typescript-eslint/restrict-template-expressions␊
      ␊
        13 errors␊
      `,
    }

## lints and fixes ts/fixture.mts

> Snapshot 1

    {
      errorCount: 13,
      exitCode: 1,
      fixed: `import { zipConvert } from "convert-zip-to-gps";␊
      ␊
      const PRIVATE_KEY = "deadbeef";␊
      ␊
      function getCoordinates(zipCode: number): string␊
      {␊
          // some coords have a space in between - remove␊
          const ll: string[] = (zipConvert(zipCode) as string).split(", ");␊
          // default zoom level␊
          const zoom = "14z";␊
          ␊
          const coords: string = [...ll, zoom].join(",");␊
      ␊
          return \`@${coords}\`;␊
      }␊
      ␊
      export default async function Search(query: string, zipCode: number): Promise<any>␊
      {␊
          const coordinates = getCoordinates(zipCode);␊
      ␊
          const search = {␊
              api_key: PRIVATE_KEY,␊
              engine:  "google_maps",␊
              ll:      coordinates,␊
              q:       query␊
          };␊
      ␊
          // API?key=value&key=value␊
          const searchString = Object.keys(search).map(key => [key, search[key]].join("=")).join("&");␊
      ␊
          return new Promise<any>(async (resolve, reject) => {␊
              try {␊
                  const searchResponse = await fetch(\`https://serpapi.com/search.json?${searchString}\`);␊
                  const searchResults  = (await searchResponse.json()).local_results;␊
      ␊
                  for await(const result of searchResults)␊
                  {␊
                      const response     = await fetch(\`${result.photos_link}&api_key=${search.api_key}\`);␊
                      const photosResult = await response.json();␊
                      ␊
                      result.photos = photosResult.photos?.map(photos => photos.image)␊
                  }␊
      ␊
                  resolve(searchResults);␊
              }␊
              catch(error) {␊
                  reject(\`Fetch failed: ${error}\`);␊
              }␊
          });␊
      }`,
      lintErrors: `␊
        fixture.mts:3:7␊
        ✖   3:7   Variable name PRIVATE_KEY must match one of the following formats: strictCamelCase             @typescript-eslint/naming-convention␊
        ✖   8:27  Unsafe call of a(n) error type typed value.                                                    @typescript-eslint/no-unsafe-call␊
        ✖  17:31  Function name Search must match one of the following formats: strictCamelCase                  @typescript-eslint/naming-convention␊
        ✖  22:9   Object Literal Property name api_key must match one of the following formats: strictCamelCase  @typescript-eslint/naming-convention␊
        ✖  31:29  Promise executor functions should not be async.                                                no-async-promise-executor␊
        ✖  34:19  Unsafe assignment of an any value.                                                             @typescript-eslint/no-unsafe-assignment␊
        ✖  34:66  Do not access a member directly from an await expression.                                      unicorn/no-await-expression-member␊
        ✖  39:23  Unsafe assignment of an any value.                                                             @typescript-eslint/no-unsafe-assignment␊
        ✖  41:17  Unsafe assignment of an any value.                                                             @typescript-eslint/no-unsafe-assignment␊
        ✖  41:33  Unsafe call of a(n) any typed value.                                                           @typescript-eslint/no-unsafe-call␊
        ✖  41:68  Unsafe return of a value of type any.                                                          @typescript-eslint/no-unsafe-return␊
        ✖  47:13  Expected the Promise rejection reason to be an Error.                                          @typescript-eslint/prefer-promise-reject-errors␊
        ✖  47:37  Invalid type "unknown" of template literal expression.                                         @typescript-eslint/restrict-template-expressions␊
      ␊
        13 errors␊
      `,
    }

## lints and fixes ts/fixture.ts

> Snapshot 1

    {
      errorCount: 13,
      exitCode: 1,
      fixed: `import { zipConvert } from "convert-zip-to-gps";␊
      ␊
      const PRIVATE_KEY = "deadbeef";␊
      ␊
      function getCoordinates(zipCode: number): string␊
      {␊
          // some coords have a space in between - remove␊
          const ll: string[] = (zipConvert(zipCode) as string).split(", ");␊
          // default zoom level␊
          const zoom = "14z";␊
          ␊
          const coords: string = [...ll, zoom].join(",");␊
      ␊
          return \`@${coords}\`;␊
      }␊
      ␊
      export default async function Search(query: string, zipCode: number): Promise<any>␊
      {␊
          const coordinates = getCoordinates(zipCode);␊
      ␊
          const search = {␊
              engine:  "google_maps",␊
              ll:      coordinates,␊
              q:       query,␊
      ␊
              // (group) keys␊
              api_key: PRIVATE_KEY␊
          };␊
      ␊
          // API?key=value&key=value␊
          const searchString = Object.keys(search).map(key => [key, search[key]].join("=")).join("&");␊
      ␊
          return new Promise<any>(async (resolve, reject) => {␊
              try {␊
                  const searchResponse = await fetch(\`https://serpapi.com/search.json?${searchString}\`);␊
                  const searchResults  = (await searchResponse.json()).local_results;␊
      ␊
                  for await(const result of searchResults)␊
                  {␊
                      const response     = await fetch(\`${result.photos_link}&api_key=${search.api_key}\`);␊
                      const photosResult = await response.json();␊
                      ␊
                      result.photos = photosResult.photos?.map(photos => photos.image)␊
                  }␊
      ␊
                  resolve(searchResults);␊
              }␊
              catch(error) {␊
                  reject(\`Fetch failed: ${error}\`);␊
              }␊
          });␊
      }`,
      lintErrors: `␊
        fixture.ts:3:7␊
        ✖   3:7   Variable name PRIVATE_KEY must match one of the following formats: strictCamelCase             @typescript-eslint/naming-convention␊
        ✖   8:27  Unsafe call of a(n) error type typed value.                                                    @typescript-eslint/no-unsafe-call␊
        ✖  17:31  Function name Search must match one of the following formats: strictCamelCase                  @typescript-eslint/naming-convention␊
        ✖  27:9   Object Literal Property name api_key must match one of the following formats: strictCamelCase  @typescript-eslint/naming-convention␊
        ✖  33:29  Promise executor functions should not be async.                                                no-async-promise-executor␊
        ✖  36:19  Unsafe assignment of an any value.                                                             @typescript-eslint/no-unsafe-assignment␊
        ✖  36:66  Do not access a member directly from an await expression.                                      unicorn/no-await-expression-member␊
        ✖  41:23  Unsafe assignment of an any value.                                                             @typescript-eslint/no-unsafe-assignment␊
        ✖  43:17  Unsafe assignment of an any value.                                                             @typescript-eslint/no-unsafe-assignment␊
        ✖  43:33  Unsafe call of a(n) any typed value.                                                           @typescript-eslint/no-unsafe-call␊
        ✖  43:68  Unsafe return of a value of type any.                                                          @typescript-eslint/no-unsafe-return␊
        ✖  49:13  Expected the Promise rejection reason to be an Error.                                          @typescript-eslint/prefer-promise-reject-errors␊
        ✖  49:37  Invalid type "unknown" of template literal expression.                                         @typescript-eslint/restrict-template-expressions␊
      ␊
        13 errors␊
      `,
    }

## lints and fixes tailwind/fixture.jsx

> Snapshot 1

    {
      errorCount: 7,
      exitCode: 1,
      fixed: `import { TypeAnimation } from "react-type-animation";␊
      import VisuallyHidden from "@/components/VisuallyHidden";␊
      import { cn } from "@/helpers/cn";␊
      import { secondsToMs } from "./utils.ts";␊
      ␊
      /** Waits to start typing. */␊
      const START_ITEM = [" ", secondsToMs(2)];␊
      ␊
      /** Displays the cursor for a brief moment. */␊
      const EMPTY_ITEM = [" ", secondsToMs(0.75)];␊
      ␊
      const parseSequence = (sequence, delay) =>␊
      	sequence.flatMap(item => {␊
      		if (item === undefined) {␊
      			return [];␊
      		}␊
      ␊
      		if (typeof item === "function") {␊
      			const result = item();␊
      ␊
      			if (result) {␊
      				return parseSequence([result], delay);␊
      			}␊
      ␊
      			return [];␊
      		}␊
      ␊
      		if (Array.isArray(item)) {␊
      			return [␊
      				...item.flatMap(([sequenceItem, delayRatio]) => [sequenceItem, delay * delayRatio]),␊
      				...EMPTY_ITEM,␊
      			];␊
      		}␊
      ␊
      		return [item, delay, ...EMPTY_ITEM];␊
      	}).slice(0, -2); // Remove last empty delay␊
      ␊
      export default function Typewriter({␊
      	className,␊
      	delay = secondsToMs(3),␊
      	label,␊
      	loop = true,␊
      	sequence,␊
      	speed = 50,␊
      }) {␊
      	const sequenceWithDelays = [␊
      		...START_ITEM,␊
      		...parseSequence(sequence, delay),␊
      	];␊
      ␊
      	return (␊
      		<span className="relative">␊
      			<VisuallyHidden>{label}</VisuallyHidden>␊
      			<TypeAnimation␊
      				aria-hidden␊
      				className={cn("mx-auto inline-block py-1", className)}␊
      				repeat={loop ? Number.POSITIVE_INFINITY : 0}␊
      				sequence={sequenceWithDelays}␊
      				// @ts-expect-error -- speed is assignable␊
      				speed={speed}␊
      			/>␊
      		</span>␊
      	);␊
      }`,
      lintErrors: `Warning: React version was set to "detect" in eslint-plugin-react settings, but the "react" package is not installed. Assuming latest React version for linting.␊
      ␊
        fixture.jsx:4:29␊
        ✖   4:29  forbid file extension .ts.                n/file-extension-in-import␊
        ✖  39:2   className is missing in props validation  react/prop-types␊
        ✖  40:2   delay is missing in props validation      react/prop-types␊
        ✖  41:2   label is missing in props validation      react/prop-types␊
        ✖  42:2   loop is missing in props validation       react/prop-types␊
        ✖  43:2   sequence is missing in props validation   react/prop-types␊
        ✖  44:2   speed is missing in props validation      react/prop-types␊
      ␊
        7 errors␊
      `,
    }

## lints and fixes react/fixture.jsx

> Snapshot 1

    {
      errorCount: 10,
      exitCode: 1,
      fixed: `// https://react.dev/learn/tutorial-tic-tac-toe␊
      ␊
      import { useState } from 'react';␊
      ␊
      function Square({ onSquareClick, value }) {␊
        return (␊
          <button className='square' onClick={onSquareClick}>␊
            {value}␊
          </button>␊
        );␊
      }␊
      ␊
      function Board({ onPlay, squares, xIsNext }) {␊
        function handleClick(i) {␊
          if (calculateWinner(squares) || squares[i]) {␊
            return;␊
          }␊
      ␊
          const nextSquares = [...squares];␊
          nextSquares[i] = xIsNext ? 'X' : 'O';␊
          onPlay(nextSquares);␊
        }␊
      ␊
        const winner = calculateWinner(squares);␊
        let status;␊
        status = winner ? 'Winner: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O');␊
      ␊
        return (␊
          <>␊
            <div className="status" >{status}</div>␊
            <div className="board-row">␊
              <Square value={squares[0]} onSquareClick={() => handleClick(0)} />␊
              <Square value={squares[1]} onSquareClick={() => handleClick(1)} />␊
              <Square value={squares[2]} onSquareClick={() => handleClick(2)} />␊
            </div>␊
            <div className="board-row">␊
              <Square value={squares[3]} onSquareClick={() => handleClick(3)} />␊
              <Square value={squares[4]} onSquareClick={() => handleClick(4)} />␊
              <Square value={squares[5]} onSquareClick={() => handleClick(5)} />␊
            </div>␊
            <div className="board-row">␊
              <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>␊
              <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>␊
              <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>␊
            </div>␊
          </>␊
        );␊
      }␊
      ␊
      export default function Game() {␊
        const [history, setHistory] = useState([Array.from({length: 9}).fill(null)]);␊
        const [currentMove, setCurrentMove] = useState(0);␊
        const xIsNext = currentMove % 2 === 0;␊
        const currentSquares = history[currentMove];␊
      ␊
        function handlePlay(nextSquares) {␊
          const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];␊
          setHistory(nextHistory);␊
          setCurrentMove(nextHistory.length - 1);␊
        }␊
      ␊
        function jumpTo(nextMove) {␊
          setCurrentMove(nextMove);␊
        }␊
      ␊
        const moves = history.map((squares, move) => {␊
          let description;␊
          description = move > 0 ? 'Go to move #' + move : 'Go to game start';␊
          return (␊
            <li key={move}>␊
              <button onClick={() => jumpTo(move)}>{description}</button>␊
            </li>␊
          );␊
        });␊
      ␊
        return (␊
          <div className="game">␊
            <div className="game-board">␊
              <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />␊
            </div>␊
            <div className="game-info">␊
              <ol>{moves}</ol>␊
            </div>␊
          </div>␊
        );␊
      }␊
      ␊
      function calculateWinner(squares) {␊
        const lines = [␊
          [0, 1, 2],␊
          [3, 4, 5],␊
          [6, 7, 8],␊
          [0, 3, 6],␊
          [1, 4, 7],␊
          [2, 5, 8],␊
          [0, 4, 8],␊
          [2, 4, 6],␊
        ];␊
        for (const [a, b, c] of lines) {␊
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {␊
            return squares[a];␊
          }␊
        }␊
      ␊
        return null;␊
      }`,
      lintErrors: `Warning: React version was set to "detect" in eslint-plugin-react settings, but the "react" package is not installed. Assuming latest React version for linting.␊
      ␊
        fixture.jsx:5:19␊
        ⚠  70:16  Do not use Array index in keys                       react/no-array-index-key␊
        ✖   5:19  onSquareClick is missing in props validation         react/prop-types␊
        ✖   5:34  value is missing in props validation                 react/prop-types␊
        ✖   7:5   Missing an explicit type attribute for button        react/button-has-type␊
        ✖  13:18  onPlay is missing in props validation                react/prop-types␊
        ✖  13:26  squares is missing in props validation               react/prop-types␊
        ✖  13:35  xIsNext is missing in props validation               react/prop-types␊
        ✖  26:3   status is never reassigned. Use const instead.       prefer-const␊
        ✖  68:5   description is never reassigned. Use const instead.  prefer-const␊
        ✖  71:9   Missing an explicit type attribute for button        react/button-has-type␊
        ✖  79:59  JSX props should not use functions                   react/jsx-no-bind␊
      ␊
        1 warning␊
        10 errors␊
      `,
    }

## lints and fixes react/fixture.tsx

> Snapshot 1

    {
      errorCount: 28,
      exitCode: 1,
      fixed: `// https://react.dev/learn/tutorial-tic-tac-toe␊
      ␊
      import { useState } from 'react';␊
      ␊
      type SquareProps = {␊
          readonly value: string;␊
          readonly onSquareClick: () => void;␊
          };␊
      ␊
      function Square({ onSquareClick, value }: SquareProps) {␊
        return (␊
          <button className='square' onClick={onSquareClick}>␊
            {value}␊
          </button>␊
        );␊
      }␊
      ␊
      type BoardProps = {␊
          readonly squares: string[];␊
          readonly xIsNext: boolean;␊
          readonly onPlay: (squares: string[]) => void;␊
      }␊
      ␊
      function Board({ onPlay, squares, xIsNext }: BoardProps) {␊
        function handleClick(i) {␊
          if (calculateWinner(squares) || squares[i]) {␊
            return;␊
          }␊
      ␊
          const nextSquares = [...squares];␊
          nextSquares[i] = xIsNext ? 'X' : 'O';␊
          onPlay(nextSquares);␊
        }␊
      ␊
        const winner = calculateWinner(squares);␊
        let status;␊
        status = winner ? 'Winner: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O');␊
      ␊
        return (␊
          <>␊
            <div className="status" >{status}</div>␊
            <div className="board-row">␊
              <Square value={squares[0]} onSquareClick={() => handleClick(0)} />␊
              <Square value={squares[1]} onSquareClick={() => handleClick(1)} />␊
              <Square value={squares[2]} onSquareClick={() => handleClick(2)} />␊
            </div>␊
            <div className="board-row">␊
              <Square value={squares[3]} onSquareClick={() => handleClick(3)} />␊
              <Square value={squares[4]} onSquareClick={() => handleClick(4)} />␊
              <Square value={squares[5]} onSquareClick={() => handleClick(5)} />␊
            </div>␊
            <div className="board-row">␊
              <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>␊
              <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>␊
              <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>␊
            </div>␊
          </>␊
        );␊
      }␊
      ␊
      export default function Game() {␊
        const [history, setHistory] = useState([Array.from({length: 9}).fill(null)]);␊
        const [currentMove, setCurrentMove] = useState(0);␊
        const xIsNext = currentMove % 2 === 0;␊
        const currentSquares = history[currentMove];␊
      ␊
        function handlePlay(nextSquares) {␊
          const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];␊
          setHistory(nextHistory);␊
          setCurrentMove(nextHistory.length - 1);␊
        }␊
      ␊
        function jumpTo(nextMove) {␊
          setCurrentMove(nextMove);␊
        }␊
      ␊
        const moves = history.map((squares, move) => {␊
          let description;␊
          description = move > 0 ? 'Go to move #' + move : 'Go to game start';␊
          return (␊
            <li key={move}>␊
              <button onClick={() => jumpTo(move)}>{description}</button>␊
            </li>␊
          );␊
        });␊
      ␊
        return (␊
          <div className="game">␊
            <div className="game-board">␊
              <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />␊
            </div>␊
            <div className="game-info">␊
              <ol>{moves}</ol>␊
            </div>␊
          </div>␊
        );␊
      }␊
      ␊
      function calculateWinner(squares: string[]): string | undefined {␊
        const lines = [␊
          [0, 1, 2],␊
          [3, 4, 5],␊
          [6, 7, 8],␊
          [0, 3, 6],␊
          [1, 4, 7],␊
          [2, 5, 8],␊
          [0, 4, 8],␊
          [2, 4, 6],␊
        ];␊
        for (const [a, b, c] of lines) {␊
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {␊
            return squares[a];␊
          }␊
        }␊
      ␊
        return null;␊
      }`,
      lintErrors: `Warning: React version was set to "detect" in eslint-plugin-react settings, but the "react" package is not installed. Assuming latest React version for linting.␊
      ␊
        fixture.tsx:11:3␊
        ⚠   81:16  Do not use Array index in keys                                                                                                                       react/no-array-index-key␊
        ✖   11:3   Unsafe return of a value of type error.                                                                                                              @typescript-eslint/no-unsafe-return␊
        ✖   12:5   Missing an explicit type attribute for button                                                                                                        react/button-has-type␊
        ✖   20:5   Prop name xIsNext doesn’t match rule ^(is|has)[A-Z]([A-Za-z0-9]?)+                                                                                   react/boolean-prop-naming␊
        ✖   26:34  Prefer using nullish coalescing operator (??) instead of a logical or (||), as it is a safer operator.                                               @typescript-eslint/prefer-nullish-coalescing␊
        ✖   37:3   status is never reassigned. Use const instead.                                                                                                       prefer-const␊
        ✖   39:3   Unsafe return of a value of type any.                                                                                                                @typescript-eslint/no-unsafe-return␊
        ✖   62:9   Unsafe assignment of an error typed value.                                                                                                           @typescript-eslint/no-unsafe-assignment␊
        ✖   62:33  Unsafe call of a(n) error type typed value.                                                                                                          @typescript-eslint/no-unsafe-call␊
        ✖   63:9   Unsafe assignment of an error typed value.                                                                                                           @typescript-eslint/no-unsafe-assignment␊
        ✖   63:41  Unsafe call of a(n) error type typed value.                                                                                                          @typescript-eslint/no-unsafe-call␊
        ✖   65:9   Unsafe assignment of an error typed value.                                                                                                           @typescript-eslint/no-unsafe-assignment␊
        ✖   68:26  Unsafe spread of an error typed value in an array.                                                                                                   @typescript-eslint/no-unsafe-assignment␊
        ✖   68:29  Unsafe call of a(n) error type typed value.                                                                                                          @typescript-eslint/no-unsafe-call␊
        ✖   68:46  Invalid operand for a + operation. Operands must each be a number or string, allowing a string + any of: boolean, null, RegExp, undefined. Got any.  @typescript-eslint/restrict-plus-operands␊
        ✖   69:5   Unsafe call of a(n) error type typed value.                                                                                                          @typescript-eslint/no-unsafe-call␊
        ✖   70:5   Unsafe call of a(n) error type typed value.                                                                                                          @typescript-eslint/no-unsafe-call␊
        ✖   74:5   Unsafe call of a(n) error type typed value.                                                                                                          @typescript-eslint/no-unsafe-call␊
        ✖   77:9   Unsafe assignment of an error typed value.                                                                                                           @typescript-eslint/no-unsafe-assignment␊
        ✖   77:17  Unsafe call of a(n) error type typed value.                                                                                                          @typescript-eslint/no-unsafe-call␊
        ✖   79:5   description is never reassigned. Use const instead.                                                                                                  prefer-const␊
        ✖   79:47  Invalid operand for a + operation. Operands must each be a number or string, allowing a string + any of: boolean, null, RegExp, undefined. Got any.  @typescript-eslint/restrict-plus-operands␊
        ✖   80:5   Unsafe return of a value of type error.                                                                                                              @typescript-eslint/no-unsafe-return␊
        ✖   81:16  Unsafe assignment of an any value.                                                                                                                   @typescript-eslint/no-unsafe-assignment␊
        ✖   82:9   Missing an explicit type attribute for button                                                                                                        react/button-has-type␊
        ✖   87:3   Unsafe return of a value of type error.                                                                                                              @typescript-eslint/no-unsafe-return␊
        ✖   90:25  Unsafe assignment of an error typed value.                                                                                                           @typescript-eslint/no-unsafe-assignment␊
        ✖   90:59  JSX props should not use functions                                                                                                                   react/jsx-no-bind␊
        ✖  112:7   Unsafe return of a value of type error.                                                                                                              @typescript-eslint/no-unsafe-return␊
      ␊
        1 warning␊
        28 errors␊
      `,
    }

## lints and fixes no-dprint/fixture.js

> Snapshot 1

    {
      errorCount: 9,
      exitCode: 1,
      fixed: `const fadeScrollToTop = (() => {␊
      	const _scrollButton = document.querySelector('#scroll-top-button');␊
      ␊
      	let scrollValue = 0;␊
      	let canTick = false;␊
      ␊
      	function handleScrollToTop(newScrollValue) {␊
      		// unfade on scroll␊
      		classie.removeClass(_scrollButton, 'scroll-faded');␊
      ␊
      		setTimeout(() => {␊
      			// refade if stopped scrolling␊
      			if (scrollValue === newScrollValue) {␊
      				classie.addClass(_scrollButton, 'scroll-faded');␊
      			}␊
      		}, 3000);␊
      ␊
      		scrollValue = newScrollValue;␊
      	}␊
      ␊
      	document.addEventListener('scroll', () => {␊
      		if (!canTick) {␊
      			globalThis.requestAnimationFrame(() => {␊
      				if (window.scrollY >= 90) {␊
      					classie.removeClass(_scrollButton, 'scroll-hidden');␊
      					handleScrollToTop(window.scrollY);␊
      				} else {␊
      					classie.addClass(_scrollButton, 'scroll-hidden');␊
      				}␊
      ␊
      				canTick = false;␊
      			});␊
      ␊
      			canTick = true;␊
      		}␊
      	});␊
      })();␊
      `,
      lintErrors: `␊
        fixture.js:1:7␊
        ✖   1:7   fadeScrollToTop is assigned a value but never used. Allowed unused vars must match /^_/u.  no-unused-vars␊
        ✖   2:24  document is not defined.                                                                   no-undef␊
        ✖   9:3   classie is not defined.                                                                    no-undef␊
        ✖  14:5   classie is not defined.                                                                    no-undef␊
        ✖  21:2   document is not defined.                                                                   no-undef␊
        ✖  24:9   window is not defined.                                                                     no-undef␊
        ✖  25:6   classie is not defined.                                                                    no-undef␊
        ✖  26:24  window is not defined.                                                                     no-undef␊
        ✖  28:6   classie is not defined.                                                                    no-undef␊
      ␊
        9 errors␊
      `,
    }

## lints and fixes js/fixture.cjs

> Snapshot 1

    {
      errorCount: 2,
      exitCode: 1,
      fixed: `// https://github.com/TheRenegadeCoder/sample-programs/blob/main/archive/j/javascript/prime-number.js␊
      ␊
      // checks for prime␊
      module.exports.isPrime = (number) => {␊
          if(number <= 1)␊
            return false␊
      ␊
          for (let i = 2; i <= Math.sqrt(number); i++) {␊
            // eslint-disable-next-line eqeqeq␊
            if (number % i == 0) {␊
              return false;␊
            }␊
          }␊
      ␊
          return number > 1;␊
        };␊
        ␊
        const input = process.argv[2];␊
        const   number = Number(input)␊
        ␊
        if (input !== '' && Number.isInteger(number) && number >= 0) {␊
              module.exports.isPrime(input) ? console.log("prime") : console.log("composite");␊
        } else {␊
                  console.log("Usage: please input a non-negative integer")␊
        }␊
      ␊
      ␊
      `,
      lintErrors: `␊
        fixture.cjs:18:17␊
        ✖  18:17  Unexpected use of the global variable process. Use require("process") instead.  n/prefer-global/process␊
        ✖  22:9   Expected an assignment or function call and instead saw an expression.          no-unused-expressions␊
      ␊
        2 errors␊
      `,
    }

## lints and fixes js/fixture.js

> Snapshot 1

    {
      errorCount: 2,
      exitCode: 1,
      fixed: `// https://github.com/TheRenegadeCoder/sample-programs/blob/main/archive/j/javascript/prime-number.js␊
      ␊
      // checks for prime␊
      const isPrime = (number) => {␊
          if(number <= 1)␊
            return false␊
      ␊
          for (let i = 2; i <= Math.sqrt(number); i++) {␊
            // eslint-disable-next-line eqeqeq␊
            if (number % i == 0) {␊
              return false;␊
            }␊
          }␊
      ␊
          return number > 1;␊
        };␊
        ␊
        const input = process.argv[2];␊
        const   number = Number(input)␊
        ␊
        if (input !== '' && Number.isInteger(number) && number >= 0) {␊
              isPrime(input) ? console.log("prime") : console.log("composite");␊
        } else {␊
                  console.log("Usage: please input a non-negative integer")␊
        }␊
      ␊
      ␊
      `,
      lintErrors: `␊
        fixture.js:18:17␊
        ✖  18:17  Unexpected use of the global variable process. Use require("process") instead.  n/prefer-global/process␊
        ✖  22:9   Expected an assignment or function call and instead saw an expression.          no-unused-expressions␊
      ␊
        2 errors␊
      `,
    }

## lints and fixes js/fixture.mjs

> Snapshot 1

    {
      errorCount: 2,
      exitCode: 1,
      fixed: `// https://github.com/TheRenegadeCoder/sample-programs/blob/main/archive/j/javascript/prime-number.js␊
      ␊
      // checks for prime␊
      export const isPrime = (number) => {␊
          if(number <= 1)␊
            return false␊
      ␊
          for (let i = 2; i <= Math.sqrt(number); i++) {␊
            // eslint-disable-next-line eqeqeq␊
            if (number % i == 0) {␊
              return false;␊
            }␊
          }␊
      ␊
          return number > 1;␊
        };␊
        ␊
        const input = process.argv[2];␊
        const   number = Number(input)␊
        ␊
        if (input !== '' && Number.isInteger(number) && number >= 0) {␊
              isPrime(input) ? console.log("prime") : console.log("composite");␊
        } else {␊
                  console.log("Usage: please input a non-negative integer")␊
        }␊
      ␊
      ␊
      `,
      lintErrors: `␊
        fixture.mjs:18:17␊
        ✖  18:17  Unexpected use of the global variable process. Use require("process") instead.  n/prefer-global/process␊
        ✖  22:9   Expected an assignment or function call and instead saw an expression.          no-unused-expressions␊
      ␊
        2 errors␊
      `,
    }
