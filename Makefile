main.js: main.ts
	tsc main.ts

clean:
	@$(RM) nspire.js main.js app.component.js 2>/dev/null || true

run:
	node main.js

.PHONY: clean
