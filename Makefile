main.js: main.ts
	tsc main.ts

clean:
	@$(RM) *.js 2>/dev/null || true

run:
	node main.js

.PHONY: clean
